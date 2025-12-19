import Markdown from 'react-markdown'

export default function(props){
    return (   
        <>
            {props.theRecipe && 
                <div className="text-start">
                    <Markdown>{props.theRecipe}</Markdown>
                </div>
            }
        </>       
    )
}