//functional component
import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "c90b5b01";
  const APP_KEY = "70f624f99c37101b386ca7c8a46d8b72";

  const [recipes, displayedRecipes] = useState([]); //this is what's returned from the API
  const [searchInput, updateSearchInput] = useState(""); //this is whats in the search bar
  const [query, setQuery] = useState("chicken"); //this is whats being queried to the API

  useEffect(() => {
    fetchApi();
  }, [query]);
  //this is what runs as soon as the page is loaded & chicken state is default

  const fetchApi = async () => {
    const fetchAPI = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const res = await fetchAPI.json();
    displayedRecipes(res.hits);
  };

  const updateSearch = (e) => {
    updateSearchInput(e.target.value);
    console.log(searchInput);
    //the process of tracking what is inputted into the search bar
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchInput);
    updateSearchInput("");
    //the process of setting query state to what's in the search input
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={searchInput}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className={"recipes"}>
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            key={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
            time={recipe.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
