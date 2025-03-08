import React from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
  return (
    <div>
      {choices.map((choice) => (
        <label key={choice}>
          <input
            type="radio"
            name={label}
            value={choice}
            checked={checked === choice}
            onChange={handleChange}
          />
          {choice}
        </label>
      ))}
    </div>
  );
};

export default RecipeChoices;
