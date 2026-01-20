import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Recipe from "./components/Recipe"
import IngredientList from "./components/IngredientList"
import {getRecipeFromChefClaude} from './js/ai'

function MainPart(){
    let [ingredientList, setIngredientList] =useState(['Eggs', "Rice", 'Chicken', 'Spinach']);
    const basidx =['Eggs', "Rice", 'Chicken', 'Spinach'];
    const [theRecipe, setTheRecipe] = useState("")  // "" and not NULL
    const [isLoading, setIsLoading] = useState(false);
    const recipeSection = useRef(null)
    

    useEffect(() => function (){
        if(theRecipe !== null && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"});
            console.log(theRecipe);
            console.log("here");
        }
    }, [theRecipe])


    function addIngredientToForm(formData){
        const value = formData.get("ingredient_input")
        if (ingredientList.includes(value)) {
            alert(value + ' is already in the list');
        }else{
            setIngredientList(prevList => [...prevList, value]);
        }
    }
 
    async function getRecipe(){
        setIsLoading(true);
        const recipeFromAi = await getRecipeFromChefClaude(ingredientList);
       // console.log(recipeFromAi);
        setTheRecipe(recipeFromAi);
        setIsLoading(false);
    }


        let ingredientListLi = ingredientList.map((element) =>{
            return (
                <li key={element}>{element}</li>
            );
        });

  return (
    <>
        <div className="container"> 
                <form className="row" id="myForm" action={addIngredientToForm}>
                    <div className="col-lg-8">
                        <input
                            type="text"
                            name="ingredient_input"
                            className="form-control mb-2"
                            placeholder="e.g. Eggs, Rice, etc."
                            aria-label="Add Ingredient"
                        />
                    </div>
                    <div className="col-lg-4">
                        <button className="btn btn-primary mb-2">Add Ingredient</button>
                    </div>
                </form>
                {ingredientList.length > 0 &&
                    <IngredientList ingredientListLi={ingredientListLi} handleGetRecipe={getRecipe} />
                }

                {ingredientList.length > 3 &&
                    (isLoading ? <p>Loading...</p> : <Recipe theRecipe={theRecipe} ref={recipeSection} />)
                }
        </div>
    </>  
  );
}

export default MainPart