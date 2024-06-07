import { useContext } from "react"
import { SearchContext } from "../Context/SearchContext"

function TagButtons({tags}) {
    const {searchTag} = useContext(SearchContext); 
    
    console.log(tags);

    return (
        <div>
            <button onClick={()=>searchTag(tags[0])}>{tags[0]}</button>
            <button onClick={()=>searchTag(tags[1])}>{tags[1]}</button>
            <button onClick={()=>searchTag(tags[2])}>{tags[2]}</button>
        </div>
    )
}

export default TagButtons
