import { useState } from "react"
// import { SearchContext } from "../Context/SearchContext"
import styles from './TagButtons.module.scss'
import RelevantResults from "./RelevantResults";

function TagButtons({result}) {
    // const {searchTag} = useContext(SearchContext); 
    const tags = result.tags.split(',').map(str=>str.trim());
    const [currTag, setCurrTag] = useState(tags[0]);
    
    // console.log(tags);

    return (<>
        <div className={styles.buttons}>
            
            <button className={`${styles.tagButton} ${currTag == tags[0] ? styles.selected : ''}`} onClick={()=>setCurrTag(tags[0])}>{tags[0]}</button>
            <button className={`${styles.tagButton} ${currTag == tags[1] ? styles.selected : ''}`} onClick={()=>setCurrTag(tags[1])}>{tags[1]}</button>
            <button className={`${styles.tagButton} ${currTag == tags[2] ? styles.selected : ''}`} onClick={()=>setCurrTag(tags[2])}>{tags[2]}</button>
            
        </div>
        <RelevantResults currTag={currTag} />
        </>
    )
}

export default TagButtons
