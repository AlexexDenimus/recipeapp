import React, {Component} from 'react';
import './RecipeList.css';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instruction: 'Frigy pasta and spaghetti',
                ingredients: ["spaghetti", "water", "pasta"],
                img: "http://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-utensils.jpg"
            },
            {
                title: "Milkshake",
                instruction: 'Combine and shake',
                ingredients: ["milk", "ice cream"],
                img: "https://amandascookin.com/wp-content/uploads/2017/02/nice-cream-milkshakes-H.jpg"
            },
            {
                title: "Avocado Toast",
                instruction: 'Toast bread with avocado',
                ingredients: ["avocado", "toast"],
                img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/11/0/FNK_All-the-Avocado-Toast_s4x3.jpg.rend.hgtvcom.616.462.suffix/1450059496131.jpeg"
            }
        ]
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    
    render (){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />        
        ));
    
        return(
            <div className="list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;