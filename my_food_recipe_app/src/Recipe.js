//class Component to display what's fetched
import React from 'react';

const Recipe = ({title, calories, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>calories: {calories}</p>
            <img src={image} alt='' />
        </div>
    )
}

export default Recipe;