import React, { useEffect, useState } from 'react'; 
import './App.css';
import Recipe from './Recipe'


const App = () => {

  const APP_ID = 'c90b5b01';
  const APP_KEY = '70f624f99c37101b386ca7c8a46d8b72'
  // let homepageLoadSearch = 'chicken'
  // const exampleReq = `https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const [recipes, displayedRecipes] = useState([]);
  const [searchInput, updateSearchInput] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    fetchApiHome()

  }, [query])

  const fetchApiHome = async () => {
    const fetchAPI = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const res = await fetchAPI.json()
    displayedRecipes(res.hits)
    // console.log("fetch api home")
  }

  // const fetchApiSearch = async () => {
  //   const fetchApiSearch = await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const res = await fetchApiSearch.json()
  //   console.log(res)
  //   console.log("fetch api search")
  // }

  const updateSearch = e => {
    updateSearchInput(e.target.value)
    console.log(searchInput)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(searchInput) 
  }

  return (
    <div className="APP">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={searchInput} onChange={updateSearch} /> 
        <button className='search-button' type="submit" >Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
    </div>
  );
};

export default App;