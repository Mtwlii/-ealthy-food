import React, { useState, useEffect } from "react";
import './App.css';
import Recipe from "./Recipe";


const App = () => {

  const APP_ID = "3c386a94";
  const APP_KEY = "3cc9e03c78026c8ba776c59d88d71a8f";

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {

    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );

    const data = await response.json();
    setRecipes(data.hits);
  }

  const updatSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updatSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App;