import React from "react";
import skills from "../data/index";
import Contact from "./Contact";

const SkillIconsBar = () => {
  return (
    <>
      <div className="skill-icon-bar relative z-50 bg-primary flex justify-center space-x-4 p-4">
        {skills.map((skill, index) => {
          if (skill.isText) {
            return (
              <a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-extrabold text-purple-600 tracking-wide p-3 rounded-full bg-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-110"
              >
                {skill.name}
              </a>
            );
          }

          const Icon = skill.icon;
          return (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900 text-4xl transition-all duration-300 hover:shadow-lg hover:scale-110"
            >
              <Icon className={`${skill.color} cursor-pointer`} />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SkillIconsBar;