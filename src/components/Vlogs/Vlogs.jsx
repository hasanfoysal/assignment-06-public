/* eslint-disable react/prop-types */

import Vlog from "../Vlog/Vlog";
import { useEffect } from "react";
import { useState } from "react";

const Vlogs = ({cookButton}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[])
    return (
        <div className="grid grid-cols-2 gap-10">
        {
           recipes.map(vlog => <Vlog cookButton={cookButton} key={vlog.recipe_id} vlog={vlog}></Vlog>) 
        }
        </div>
    );
};

export default Vlogs;