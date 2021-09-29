//functional component to display fetched info
import React from "react";
import style from "./recipe.module.css";

//deconstructing the props with {}
const Recipe = ({ title, ingredients, image, time }) => {
  return (
    <div className={style.recipe}>
      <h1 className="title">{title}</h1>
      <img src={image} alt="" />
      <p className="time">
        {" "}
        <b>prep time</b>: {time} minutes
      </p>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
