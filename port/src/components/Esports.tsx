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

function Esports({}) {
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
      url: "#",
      web: "",
      title: "SFU Esports Discord Bot",
      description:
        "Developed a discord bot for the SFU esports association for the sole purpose of automating the ticketing process related to Event logistics. This project was trailed with 50+ users before being shelved due to organisations personal changes.",
      tags: ["Extension", "offline"],
      tech: ["discord", "js"],
      collab: [],
      show: "yomiru poster.png",
      live: "no",
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
      <Chatbot></Chatbot>
    </div>
  );
}

export default Esports;
