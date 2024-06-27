import React from "react";
import { studies, experiences } from "./data/resume";

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <h2>Education</h2>
      <ul>
        {studies.map((study) => (
          <li key={study.id}>
            <h3>{study.title}</h3>
            <p>{study.institution}</p>
            <p>{study.date}</p>
          </li>
        ))}
      </ul>
      <h2>Experience</h2>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
