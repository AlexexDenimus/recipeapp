import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
    render(){
        const {title, img, instruction} = this.props;
        const ingredients = this.props.ingredients.map((ing, i) => (
           <li key={i}>{ing}</li> 
        ));
        return (
            <div className="recipe-card">
                <div className="card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="card-content">
                    <h2>Recipe of {title}</h2>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instruction:</h4>
                    <p>{instruction}</p>
                </div>
                
            </div>
            )
    }
}

export default Recipe;