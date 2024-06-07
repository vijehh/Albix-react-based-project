import { useContext } from "react"
import { SearchContext } from "../Context/SearchContext"
import Masonry from "react-masonry-css";
// import Results from "./Results";
import TagResults from "./TagResults";

function RelevantResults() {
    const {tagRes} = useContext(SearchContext);
    const breakpoints = {
        default: 4,
        1100: 2,
        700: 1
    }

    return (
        
            <section>

            <Masonry 
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                    {tagRes ? tagRes.map((result, i)=><TagResults result={result} key={i} />) : ''}
            </Masonry>
        </section>
    
    )
}

export default RelevantResults
