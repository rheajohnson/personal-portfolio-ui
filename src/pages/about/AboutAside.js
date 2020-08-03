import React from "react";
import {
  FaRegSmileBeam,
  FaAws,
  FaPython,
  FaNodeJs,
  FaReact,
  FaHammer,
  FaDatabase,
  FaStar,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

export default function SkillsAside() {
  return (
    <ul className="skills-list">
      <li>
        <FaReact />
        <p>React</p>
      </li>
      <li>
        <FaNodeJs />
        <p>Node.js</p>
      </li>
      <li>
        <FaAws />
        <p>AWS</p>
      </li>
      <li>
        <FaPython />
        <p>Python</p>
      </li>
      <li>
        <FaDatabase />
        <p>PostgreSQL</p>
      </li>
      <li>
        <DiMongodb />
        <p>MongoDB</p>
      </li>
      <li>
        <FaHammer />
        <p>Terraform</p>
      </li>

      <li>
        <FaStar />
        <p>PySpark</p>
      </li>
      <li>
        <FaRegSmileBeam />
        <p>UX / UI</p>
      </li>
    </ul>
  );
}
