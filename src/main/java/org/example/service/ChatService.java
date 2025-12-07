package org.example.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ChatService {
    private final String apiKey;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public ChatService() {
        this.apiKey = "AIzaSyBUOj1iU9MyWq120sYvvGIaGIO6FM8Hueg";// System.getenv("OPENAI_API_KEY");
        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }

    private String getAvailableModel() {
        // Try to list available models
        try {
            String[] apiVersions = { "v1beta", "v1" };
            for (String apiVersion : apiVersions) {
                URI uri = URI
                        .create("https://generativelanguage.googleapis.com/" + apiVersion + "/models?key=" + apiKey);
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(uri)
                        .GET()
                        .build();

                HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() == 200) {
                    JsonNode root = objectMapper.readTree(response.body());
                    JsonNode models = root.path("models");
                    if (models.isArray() && models.size() > 0) {
                        // Find first model that supports generateContent
                        for (JsonNode model : models) {
                            JsonNode supportedMethods = model.path("supportedGenerationMethods");
                            if (supportedMethods.isArray()) {
                                for (JsonNode method : supportedMethods) {
                                    if ("generateContent".equals(method.asText())) {
                                        String modelName = model.path("name").asText();
                                        // Extract just the model name (remove "models/" prefix if present)
                                        if (modelName.contains("/")) {
                                            modelName = modelName.substring(modelName.lastIndexOf("/") + 1);
                                        }
                                        return modelName;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (Exception e) {
            // If listing fails, fall back to trying common model names
        }
        return null;
    }

    public String getChatResponse(String message) {
        // First try to get an available model
        String model = getAvailableModel();
        String[] apiVersions = { "v1beta", "v1" };

        // If no model found from listing, try common model names
        String[] fallbackModels = { "gemini-pro", "gemini-1.0-pro", "gemini-1.5-flash", "gemini-1.5-pro" };

        Exception lastException = null;

        // Try with discovered model first
        if (model != null) {
            for (String apiVersion : apiVersions) {
                try {
                    String response = tryGenerateContent(message, model, apiVersion);
                    return response;
                } catch (Exception e) {
                    lastException = e;
                }
            }
        }

        // Try fallback models
        for (String fallbackModel : fallbackModels) {
            for (String apiVersion : apiVersions) {
                try {
                    String response = tryGenerateContent(message, fallbackModel, apiVersion);
                    return response;
                } catch (Exception e) {
                    lastException = e;
                }
            }
        }

        throw new RuntimeException("Error calling Gemini API: No available models found. Last error: " +
                (lastException != null ? lastException.getMessage() : "Unknown error"), lastException);
    }

    private String tryGenerateContent(String message, String model, String apiVersion) throws Exception {
        URI uri = URI.create("https://generativelanguage.googleapis.com/" + apiVersion + "/models/" + model
                + ":generateContent?key=" + apiKey);

        // Build Gemini API request format
        // Structure: {"contents": [{"parts": [{"text": "message"}]}]}
        Map<String, Object> textPart = new HashMap<>();
        textPart.put("text", message);

        Map<String, Object> content = new HashMap<>();
        content.put("parts", List.of(textPart));

        Map<String, Object> requestBodyMap = new HashMap<>();
        requestBodyMap.put("contents", List.of(content));

        String requestBody = objectMapper.writeValueAsString(requestBodyMap);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(uri)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() == 200 || response.statusCode() == 201) {
            // Parse JSON response to extract the assistant message text.
            JsonNode root = objectMapper.readTree(response.body());

            // Check for errors in response
            if (root.has("error")) {
                throw new RuntimeException("Gemini API error: " + root.path("error").toString());
            }

            // Gemini response format: .candidates[0].content.parts[0].text
            JsonNode candidates = root.path("candidates");
            if (candidates.isArray() && candidates.size() > 0) {
                JsonNode contentNode = candidates.path(0).path("content").path("parts").path(0).path("text");
                if (!contentNode.isMissingNode()) {
                    return contentNode.asText();
                }
            }

            // Fallback: return full response body for debugging
            throw new RuntimeException("Response structure unexpected. Full response: " + response.body());
        } else {
            // Try to parse error response
            String errorBody = response.body();
            try {
                JsonNode errorJson = objectMapper.readTree(errorBody);
                if (errorJson.has("error")) {
                    throw new RuntimeException("Gemini API request failed: " + response.statusCode() +
                            " - " + errorJson.path("error").toString());
                }
            } catch (Exception e) {
                // Not JSON, use raw body
            }
            throw new RuntimeException("Gemini API request failed: " + response.statusCode() + " - " + errorBody);
        }
    }
}
