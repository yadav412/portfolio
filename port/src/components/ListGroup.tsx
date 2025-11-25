import { Fragment, use, useState } from "react";
import type { MouseEvent } from "react";

function Projects() {
  let hackathons = ["Luxbot - Stormhacks 2025", "F1 stocks - Fall Hacks 2025"];

  const [selectedIndex, setSelectedIndex] = useState(-1);
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
        {projects.map((projects, index) => (
          <li className="list-group-item" key={projects} onClick={handleClick}>
            {projects}
          </li>
        ))}
      </ul>

      <h1>Hackathons</h1>
      <ul className="list-group">
        {hackathons.map((hackathons, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {hackathons}
            key={projects} onClick={selectedIndex}
            {projects}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default Projects;

// conditional rendering
