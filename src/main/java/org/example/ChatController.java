package org.example;

import org.example.dto.ChatRequest;
import org.example.dto.ChatResponse;
import org.example.service.ChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping
    public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request) {
        try {
            String reply = chatService.getChatResponse(request.getMessage());
            return ResponseEntity.ok(new ChatResponse(reply));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(new ChatResponse("Sorry, something went wrong: " + e.getMessage()));
        }
    }
}
