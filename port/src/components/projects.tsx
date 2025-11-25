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
  const projects = [
    {
      url: "https://github.com/yadav412/yomiru",
      web: "http://yomiru.netlify.app/",
      title: "Yomiru ",
      description:
        "Along with 3 other team members, built a web application tailored to users who love exploring new anime. Yomiru provides users with anime suggestions that tailor to their interests so they can explore new series. ",
    },
    {
      url: "https://github.com/yadav412/LuxBot",
      web: "",
      title: "Luxbot ",
      description:
        "AI therapist using computer vision and gemini AI api calls along side elevenlabs voice playback to create a live therapy experience",
    },
    {
      url: "https://github.com/yadav412/CSSS_Fall_Hacks2025",
      web: "",
      title: "F1 Stocks ",
      description: "This is my first project",
    },
    {
      url: "#",
      web: "",
      title: "Portfolio Site ",
      description: "This is my first project",
    },
    {
      url: "https://github.com/yadav412/psyc-data-analysis",
      web: "",
      title: "Effect of Social Media on Mood - Research Study ",
      description:
        "• Designed and executed an experimental study on emotional valence in social media content using PANAS to assess mood changes.\n• Conducted statistical analysis using Python scripting; produced a formal APA-style lab report using data processed through a custom Python script increasing result accuracy",
    },
  ];

  return (
    <div className="project-card">
      <h1 className="title">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <Thumbnail video={project} />
          <a href={project.url} className="project-link">
            <img className="icons" src="src\assets\github1.png"></img>

            <a href={project.web}>
              <img className="icons" src="src\assets\internet.png"></img>
            </a>
            <h3>{project.title}</h3>
          </a>

          <p>{project.description}</p>
          <h4 className="headings">Tech Stack</h4>

          <img className="icons" src="src\assets\github1.png"></img>

          <h4 className="headings">Collaborators</h4>

          <img className="icons" src="src\assets\github1.png"></img>
        </div>
      ))}
    </div>
  );
}

export default ProjectPage;
