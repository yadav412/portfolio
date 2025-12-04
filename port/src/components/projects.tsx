function Thumbnail({
  video,
}: {
  video: { url: string; title: string; description: string };
}) {
  return (
    <div className="thumbnail">
      <img src={video.url} alt={video.title} />
    </div>
  );
}

function ProjectPage({}) {
  const TopTags = ["Web", "Psyc", "AI", "Hackathon", "Extension", "SDLC"];

  const projects = [
    {
      url: "https://github.com/yadav412/yomiru",
      web: "http://yomiru.netlify.app/",
      title: "Yomiru ",
      description:
        "Along with 3 other team members, built a web application tailored to users who love exploring new anime. Yomiru provides users with anime suggestions that tailor to their interests so they can explore new series. ",
      tags: ["Web", "SDLC"],
      tech: ["github1", "js"],
      collab: ["Karan", "Eric", "Jassie"],
    },
    {
      url: "https://github.com/yadav412/LuxBot",
      web: "",
      title: "Luxbot ",
      description:
        "AI therapist using computer vision and gemini AI api calls along side elevenlabs voice playback to create a live therapy experience",
      tags: ["Web", "Psyc", "AI", "Hackathon"],
      tech: ["python", "ai"],
      collab: ["Charan", "Clark", "Quang"],
    },
    {
      url: "https://github.com/yadav412/CSSS_Fall_Hacks2025",
      web: "f1stocks.netlify.app/index.html",
      title: "F1 Stocks ",
      description:
        "F1 Stock Match is a fast-paced hackathon project developed in under 9 hours. The goal of the project was to creatively combine real-world stock market data with the world of Formula 1 racing, generating an interactive experience where users can explore which teams are “performing” like specific stocks. ",
      tags: ["Web", "Hackathon"],
      tech: ["typescript", "react"],
      collab: ["Charan", "Clark", "Quang"],
    },
    {
      url: "#",
      web: "",
      title: "Portfolio Site ",
      description: "This is my first project",
      tags: ["Web"],
      tech: ["typescript", "react"],
      collab: [],
    },
    {
      url: "https://github.com/yadav412/psyc-data-analysis",
      web: "",
      title: "Effect of Social Media on Mood - Research Study ",
      description:
        " Designed and executed an experimental study on emotional valence in social media content using PANAS to assess mood changes. Conducted statistical analysis using Python scripting; produced a formal APA-style lab report using data processed through a custom Python script increasing result accuracy. ",
      tags: ["Psyc", "Research", "Data Analysis"],
      tech: ["python", "pandas"],
      collab: [],
    },
    {
      url: "#",
      web: "",
      title: "SFU Esports Discord Bot",
      description:
        "Developed a discord bot for the SFU esports association for the sole purpose of automating the ticketing process related to Event logistics.",
      tags: ["Extension"],
      tech: ["discord", "nodejs"],
      collab: [],
    },
    {
      url: "#",
      web: "",
      title: "Neural decay and technology use research",
      description: "This is my first project",
      tags: ["Psyc", "Research"],
      tech: ["python", "research"],
      collab: ["Juno"],
    },
    {
      url: "#",
      web: "",
      title: "Portfolio Site ",
      description: "This is my first project",
      tags: ["", "", ""],
      tech: ["typescript", "react"],
      collab: [""],
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
          <Thumbnail video={project} />
          <div className="project-link">
            <a href={project.url}>
              <img className="icons" src="src\assets\github1.png"></img>
            </a>

            <a href={project.web}>
              <img className="icons" src="src\assets\internet.png"></img>
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

          <p>{project.description}</p>

          <h4 className="headings">Tech Stack</h4>

          <div className="icons">
            {project.tech.map((Tech: string, TechIndex) => (
              <img
                className="Tech"
                key={TechIndex}
                src={`src/assets/${Tech}.png`}
                alt={Tech}
                style={{ height: "32px", marginRight: "8px" }}
              />
            ))}
          </div>

          <h4 className="headings">Collaborators</h4>

          <div className="icons">
            {project.collab.map((collab: string, CollaboratorsIndex) => (
              <img
                className=""
                key={CollaboratorsIndex}
                src={`src/assets/${collab}.png`}
                alt={collab}
                style={{ height: "32px", marginRight: "8px" }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectPage;
