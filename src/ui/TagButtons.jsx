import { useContext, useState } from "react"
import { SearchContext } from "../Context/SearchContext"
import RelevantResults from "./RelevantResults";

function TagButtons({result}) {
    // const {searchTag} = useContext(SearchContext); 
    const tags = result.tags.split(',').map(str=>str.trim());
    const [currTag, setCurrTag] = useState(tags[0]);
    
    // console.log(tags);

    return (
        <div>
            <button onClick={()=>setCurrTag(tags[0])}>{tags[0]}</button>
            <button onClick={()=>setCurrTag(tags[1])}>{tags[1]}</button>
            <button onClick={()=>setCurrTag(tags[2])}>{tags[2]}</button>
            <RelevantResults currTag={currTag} />
        </div>
    )
}

export default TagButtons
