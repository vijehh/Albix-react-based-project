import { useContext } from "react";
import { useParams } from "react-router-dom"
import { SearchContext } from "../Context/SearchContext";
import styles from './ImageResult.module.scss'
import TagButtons from "../ui/TagButtons";
import RelevantResults from "../ui/RelevantResults";

function ImageResult() {
    const {id} = useParams();
    const {results} = useContext(SearchContext);

    // console.log(results);

    const [result] = results.filter(el=>el.id==id);
    console.log(result);

    // console.log(id);

    return (<>
        <div className={styles.searchview__sizer}></div>
        <img className="search-view__image image--main" src={result.largeImageURL} alt="smth"></img>
        <TagButtons tags={result.tags.split(',')} />
        <RelevantResults />
        
    </>
    )
}

export default ImageResult
