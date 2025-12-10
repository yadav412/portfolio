import Chatbot from "./Chatbot";
import Footer from "./Footer";

function Thumbnail({
  video,
}: {
  video: { url: string; title: string; description: string };
}) {
  return (
    <div className="thumbnail">
      {video.url ? (
        <img
          src={video.url}
          alt={video.title}
          loading="lazy"
          tabIndex={0}
          onClick={() => window.open(video.url, "_blank")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              window.open(video.url, "_blank");
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "140px",
            background: "#00000022",
            borderRadius: 12,
          }}
        />
      )}
    </div>
  );
}

function Hackathons({}) {
  // import all assets from ../assets as URLs so Vite bundles them for production
  const assets: Record<string, string> = import.meta.glob(
    "../assets/*.{png,jpg,jpeg,svg,webp}",
    { as: "url", eager: true }
  ) as Record<string, string>;

  const getAsset = (name: string) => {
    const key1 = `../assets/${name}`;
    return assets[key1] ?? assets[`./${key1}`] ?? null;
  };
  const TopTags = [
    "Web",
    "Psyc",
    "AI",
    "Hackathon",
    "Extension",
    "SDLC",
    "Research",
  ];

  const projects = [
    {
      url: "https://github.com/yadav412/LuxBot",
      web: "",
      title: "Luxbot ",
      description:
        "An AI-powered wellness assistant that uses computer vision, Gemini API calls, and ElevenLabs voice playback to create a responsive, real-time conversational experience. It interprets facial expressions and non-verbal cues to tailor its responses, while ElevenLabs generates natural voice output for a more immersive interaction.",
      tags: ["Web", "Psyc", "AI", "Hackathon", "Live"],
      tech: ["python", "programing"],
      collab: ["Charan", "Clark", "Quang"],
      show: "luxbot.png",
      live: "online",
    },
    {
      url: "https://github.com/yadav412/CSSS_Fall_Hacks2025",
      web: "f1stocks.netlify.app/index.html",
      title: "F1 Stocks ",
      description:
        "F1 Stock Match is a fast-paced hackathon project developed in under 9 hours. The goal of the project was to creatively combine real-world stock market data with the world of Formula 1 racing, generating an interactive experience where users can explore which teams are “performing” like specific stocks. ",
      tags: ["Web", "Hackathon", "Live"],
      tech: ["html-5", "js", "css-3"],
      collab: ["Charan", "Clark", "Quang"],
      show: "f1stocks.png",
      live: "online",
    },

    {
      url: "#",
      web: "",
      title: "Journey Hacks 2026 ",
      description: " Warm Up lap number 2",
      tags: ["", "", ""],
      tech: ["typescript", "react"],
      collab: ["Charan", "Clark", "Quang"],
      show: "yomiru poster.png",
    },

    {
      url: "#",
      web: "",
      title: "NwHacks 2026 ",
      description: "MLH Number 2",
      tags: ["", "", ""],
      tech: ["typescript", "react"],
      collab: ["Charan", "Clark", "Quang"],
      show: "yomiru poster.png",
    },
  ];

  return (
    <div className="project-card">
      <span
        className="callingcardcontainter"
        style={{ textAlign: "center", alignItems: "center" }}
      >
        <h1
          className="callingcard"
          style={{ textAlign: "center", alignItems: "center" }}
        >
          Nervy Starts, Strategies and Redbull
        </h1>
      </span>

      <span
        className="callingcardcontainter"
        style={{ textAlign: "center", alignItems: "center" }}
      >
        <p
          className="callingcard2"
          style={{ textAlign: "center", alignItems: "center" }}
        >
          I love building and researching cool stuff
        </p>
      </span>

      <p
        className="title"
        style={{ textAlign: "center", alignItems: "center" }}
      >
        {TopTags.map((tag, tagIndex) => (
          <span className="tag" key={tagIndex}>
            {tag}
          </span>
        ))}
      </p>

      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <a href={project.web}>
            {project.show && getAsset(project.show) ? (
              <img
                className="thumbnail"
                src={getAsset(project.show)!}
                alt="poster"
              />
            ) : null}
          </a>

          <div className="project-link">
            <a href={project.url}>
              {getAsset("github1.png") ? (
                <img
                  className="icons2"
                  src={getAsset("github1.png")!}
                  alt="github"
                />
              ) : null}
            </a>

            <a href={project.web}>
              {getAsset("internet.png") ? (
                <img
                  className="icons2"
                  src={getAsset("internet.png")!}
                  alt="website"
                />
              ) : null}
            </a>
            <h3>{project.title}</h3>
          </div>

          <p className="tags">
            {project.tags.map((tag, tagIndex) => (
              <span className="tag" key={tagIndex}>
                {tag}
              </span>
            ))}
          </p>

          <p className="des">{project.description}</p>

          <h4 className="headings">Tech Stack</h4>

          <div className="icons">
            {project.tech.map((Tech: string, TechIndex) => {
              const url = getAsset(`${Tech}.png`);
              return url ? (
                <img
                  className="Tech"
                  key={TechIndex}
                  src={url}
                  alt={Tech}
                  style={{ height: "32px", marginRight: "8px" }}
                />
              ) : null;
            })}
          </div>

          <h4 className="headings">Collaborators</h4>

          <div className="icons">
            {project.collab.map((collab: string, CollaboratorsIndex) => {
              const url = getAsset(`${collab}.png`);
              return url ? (
                <img
                  className=""
                  key={CollaboratorsIndex}
                  src={url}
                  alt={collab}
                  style={{ height: "32px", marginRight: "8px" }}
                />
              ) : null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hackathons;
