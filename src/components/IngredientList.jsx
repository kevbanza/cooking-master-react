export default function (props){
    return (
        <>
            <div className="text-start pt-3">
                <h4>This is the list of Ingredient</h4>
                <ul>
                    {props.ingredientListLi}
                </ul>
            </div>
            <div className="alert alert-secondary row" role="alert">
                    <div className="col-lg-9">
                        <b>Ready for a recipe</b>
                        <p>Generate a recipe from your list of Ingredients.</p>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-warning mb-2" onClick={props.handleGetRecipe}>Get a recipe</button>
                    </div>
                </div>
        </>
    )
}