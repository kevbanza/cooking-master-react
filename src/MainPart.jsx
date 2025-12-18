import { useState } from "react";
import Recipe from "./components/Recipe"
import IngredientList from "./components/IngredientList"

function MainPart(){
    let [ingredientList, setIngredientList] =useState(['Eggs', "Rice", 'Chicken', 'Spinach']);
    const basidx =['Eggs', "Rice", 'Chicken', 'Spinach'];
    const [recipeShown, setRecipeShown] = useState(false)
    /*
    This method to handle Submit event with the javascript part   // onSubmit={handleSubmitEvent}
    function handleSubmitEvent(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const value = formData.get("ingredient_input");

        if (ingredientList.includes(value)) {
            alert(value + 'is already in the list');
        }else{
            setIngredientList(prevList => [...prevList, value]);
        }

        document.getElementById("myForm").reset(); // clears input fields     
    }
    */

    /*  Second Method to handle form using directly the action property of form*/
    
    function addIngredientToForm(formData){
        const value = formData.get("ingredient_input")
        if (ingredientList.includes(value)) {
            alert(value + ' is already in the list');
        }else{
            setIngredientList(prevList => [...prevList, value]);
        }
    }

    function getRecipe(){
        setRecipeShown(prevRecipe => !prevRecipe);
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
                    <IngredientList ingredientListLi={ingredientListLi} />
                }

                {ingredientList.length > 3 &&
                    <Recipe recipeShown={recipeShown}  handleGetRecipe={getRecipe} />
                }
        </div>
    </>  
  );
}

export default MainPart