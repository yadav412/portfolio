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

function ProjectPage({}) {
  // import all assets from ../assets as URLs so Vite bundles them for production
  const assets: Record<string, string> = import.meta.glob(
    "../assets/*.{png,jpg,jpeg,svg,webp}",
    { as: "url", eager: true }
  ) as Record<string, string>;

  const getAsset = (name: string) => {
    const key1 = `../assets/${name}`;
    return assets[key1] ?? assets[`./${key1}`] ?? null;
  };
  const TopTags = ["Web", "Psyc", "AI", "Hackathon", "Extension", "SDLC"];

  const projects = [
    {
      url: "https://github.com/yadav412/yomiru",
      web: "http://yomiru.netlify.app/",
      title: "Yomiru ",
      description:
        "Along with 3 other team members, built a web application tailored to users who love exploring new anime. Yomiru provides users with anime suggestions that tailor to their interests so they can explore new series. ",
      tags: ["Web", "SDLC"],
      tech: ["html-5", "js", "css-3"],
      collab: ["Karan", "Eric", "Jassie"],
      show: "yomiru poster.png",
    },
    {
      url: "#",
      web: "",
      title: "Portfolio Site ",
      description:
        "Personal portfolio site that is a reflection of my current web development skills.\n Version one : This was my first time using both HTML and CSS it was really unpolished.(2024) \n Version two : This is the current version of my personal website, it is a lot more polished and has a lot more features.(2025)",
      tags: ["Web"],
      tech: ["typescript", "programing", "java", "SpringBoot"],
      collab: [],
      show: "yomiru poster.png",
    },
    {
      url: "https://github.com/yadav412/LuxBot",
      web: "",
      title: "Luxbot ",
      description:
        "An AI-powered wellness assistant that uses computer vision, Gemini API calls, and ElevenLabs voice playback to create a responsive, real-time conversational experience. It interprets facial expressions and non-verbal cues to tailor its responses, while ElevenLabs generates natural voice output for a more immersive interaction.",
      tags: ["Web", "Psyc", "AI", "Hackathon"],
      tech: ["python", "programing"],
      collab: ["Charan", "Clark", "Quang"],
      show: "luxbot.png",
    },
    {
      url: "https://github.com/yadav412/CSSS_Fall_Hacks2025",
      web: "f1stocks.netlify.app/index.html",
      title: "F1 Stocks ",
      description:
        "F1 Stock Match is a fast-paced hackathon project developed in under 9 hours. The goal of the project was to creatively combine real-world stock market data with the world of Formula 1 racing, generating an interactive experience where users can explore which teams are “performing” like specific stocks. ",
      tags: ["Web", "Hackathon"],
      tech: ["html-5", "js", "css-3"],
      collab: ["Charan", "Clark", "Quang"],
      show: "f1stocks.png",
    },

    {
      url: "https://github.com/yadav412/psyc-data-analysis",
      web: "",
      title: "Effect of Social Media on Mood - Research Study ",
      description:
        " Designed and executed an experimental study on emotional valence in social media content using PANAS to assess mood changes. Conducted statistical analysis using Python scripting; produced a formal APA-style lab report using data processed through a custom Python script increasing result accuracy. ",
      tags: ["Psyc", "Research", "Data Analysis"],
      tech: ["python", "pandas", "research"],
      collab: [],
      show: "mood.png",
    },
    {
      url: "#",
      web: "",
      title: "Neural decay and tech use- Research Study",
      description: "This is my first project",
      tags: ["Psyc", "Research"],
      tech: ["python", "pandas", "research"],
      collab: [""],
      show: "brain.png",
    },
    {
      url: "#",
      web: "",
      title: "SFU Esports Discord Bot",
      description:
        "Developed a discord bot for the SFU esports association for the sole purpose of automating the ticketing process related to Event logistics.",
      tags: ["Extension"],
      tech: ["discord", "js"],
      collab: [],
      show: "yomiru poster.png",
    },

    {
      url: "#",
      web: "",
      title: "Portfolio Site ",
      description: "This is my first project",
      tags: ["", "", ""],
      tech: ["typescript", "react"],
      collab: [""],
      show: "yomiru poster.png",
    },
  ];

  return (
    <div className="project-card">
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
      <Chatbot></Chatbot>
    </div>
  );
}

export default ProjectPage;
