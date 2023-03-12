import React from "react";

const CurriculumModules = ({ modules, curriculum }) => {
  const curriculumModules = modules.filter(
    module => module.curriculum === curriculum.id
  );

  return (
    <div>
      <h2>{curriculum.title} Curriculum Modules</h2>
      <ul>
        {curriculumModules.map(module => (
          <li key={module.id}>
            {module.title} ({module.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurriculumModules;
