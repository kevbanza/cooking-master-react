export default function(props){
    return (
        <>
            <div className="alert alert-secondary row" role="alert">
                <div className="col-lg-9">
                    <b>Ready for a recipe</b>
                    <p>Generate a recipe from your list of Ingredients.</p>
                </div>
                <div className="col-lg-3">
                    <button className="btn btn-warning mb-2" onClick={props.handleGetRecipe}>Get a recipe</button>
                </div>
            </div>
            {props.recipeShown && 
                <div>
                    <h5>Here Recipe</h5>
                </div>
            }
        </>
    )
}