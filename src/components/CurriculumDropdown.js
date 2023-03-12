import React from "react";

const CurriculumDropdown = ({ curricula, onSelect }) => {
  const handleCurriculumSelect = event => {
    onSelect(event.target.value);
  };

  return (
    <select onChange={handleCurriculumSelect}>
      <option value="">Select a curriculum</option>
      {curricula.map(curriculum => (
        <option key={curriculum.id} value={curriculum.id}>
          {curriculum.title}
        </option>
      ))}
    </select>
  );
};

export default CurriculumDropdown;
