/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Recipi from "../Recipi/Recipi";
import { useState } from "react";

const Recipes = ({handleWantToCook}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('/public/recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[]);

    return (
        <div className="grid grid-cols-2 gap-10">
        {
           recipes.map(recipi => <Recipi handleWantToCook={handleWantToCook} key={recipi.recipe_id} recipi={recipi}></Recipi>) 
        }
        </div>
    );
};

export default Recipes;