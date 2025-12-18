export default function (props){
    return (
        <div className="text-start pt-3">
            <h4>This is the list of Ingredient</h4>
            <ul>
                {props.ingredientListLi}
            </ul>
        </div>
    )
}