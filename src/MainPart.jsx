import { useState } from "react";
import Recipe from "./components/Recipe"
import IngredientList from "./components/IngredientList"
import {getRecipeFromChefClaude} from './js/ai'

function MainPart(){
    let [ingredientList, setIngredientList] =useState(['Eggs', "Rice", 'Chicken', 'Spinach']);
    const basidx =['Eggs', "Rice", 'Chicken', 'Spinach'];
    const [theRecipe, setTheRecipe] = useState(null)

    
    function addIngredientToForm(formData){
        const value = formData.get("ingredient_input")
        if (ingredientList.includes(value)) {
            alert(value + ' is already in the list');
        }else{
            setIngredientList(prevList => [...prevList, value]);
        }
    }
 
    async function getRecipe(){
        const recipeFromAi= await getRecipeFromChefClaude(ingredientList);
        console.log(recipeFromAi);
        setTheRecipe(recipeFromAi);
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
                    <Recipe theRecipe={theRecipe} />
                }
        </div>
    </>  
  );
}

export default MainPart