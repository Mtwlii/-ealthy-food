import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>Title {title}</h1>
            <ul>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe;