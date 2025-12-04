import { Fragment, useState } from "react";
import type { MouseEvent } from "react";

function Projects() {
  let hackathons = ["Luxbot - Stormhacks 2025", "F1 stocks - Fall Hacks 2025"];

  const [selectedIndex] = useState(-1);
  const projects = [
    "Yomiru",
    "Social Media & Mood",
    "SFU-Esports-Discord-Bot",
    "Portfolio site",
  ];

  const handleClick = (Event: MouseEvent) => console.log(Event);

  return (
    <Fragment>
      <h1>Projects</h1>
      <ul className="list-group">
        {projects.map((project) => (
          <li className="list-group-item" key={project} onClick={handleClick}>
            {project}
          </li>
        ))}
      </ul>

      <h1>Hackathons</h1>
      <ul className="list-group">
        {hackathons.map((hackathon) => (
          <li
            className={
              selectedIndex === hackathons.indexOf(hackathon)
                ? "list-group-item active"
                : "list-group-item"
            }
            key={hackathon}
          >
            {hackathon}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default Projects;

// conditional rendering
