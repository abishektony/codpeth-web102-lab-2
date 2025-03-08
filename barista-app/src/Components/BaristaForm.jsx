import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  const [currentDrink, setCurrentDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({});
  
  const [correct_temp, setCheckedTemperature] = useState("");
  const [correct_syrup, setCheckedSyrup] = useState("");
  const [correct_milk, setCheckedMilk] = useState("");
  const [correct_blended, setCheckedBlended] = useState("");

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  };

  const onNewDrink = () => {
    setInputs({ temperature: "", milk: "", syrup: "", blended: "" });
    setCheckedTemperature("");
    setCheckedSyrup("");
    setCheckedMilk("");
    setCheckedBlended("");
    getNextDrink();
  };

  const onCheckAnswer = () => {
    if (trueRecipe.temp !== inputs["temperature"]) {
      setCheckedTemperature("wrong");
    } else {
      setCheckedTemperature("correct");
    }
    
    if (trueRecipe.syrup !== inputs["syrup"]) {
      setCheckedSyrup("wrong");
    } else {
      setCheckedSyrup("correct");
    }
    
    if (trueRecipe.milk !== inputs["milk"]) {
      setCheckedMilk("wrong");
    } else {
      setCheckedMilk("correct");
    }
    
    if (trueRecipe.blended !== inputs["blended"]) {
      setCheckedBlended("wrong");
    } else {
      setCheckedBlended("correct");
    }
  };

  return (
    <div>
      <h1>Hi, I'd like to order a:</h1>
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>
          🔄
        </button>
      </div>

      <form>
        <h3>Temperature</h3>
        <div className="answer-space" id={correct_temp}>{inputs["temperature"]}</div>
        
        <h3>Syrup</h3>
        <div className="answer-space" id={correct_syrup}>{inputs["syrup"]}</div>
        
        <h3>Milk</h3>
        <div className="answer-space" id={correct_milk}>{inputs["milk"]}</div>
        
        <h3>Blended</h3>
        <div className="answer-space" id={correct_blended}>{inputs["blended"]}</div>
      </form>

      <button className="button check-answer" onClick={onCheckAnswer}>Check Answer</button>
    </div>
  );
};

export default BaristaForm;
