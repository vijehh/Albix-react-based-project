import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../Context/SearchContext"
import Masonry from "react-masonry-css";
// import Results from "./Results";
import TagResults from "./TagResults";

const API_KEY = '42857731-1529682eb076fe57ea890d75d';
const URL = 'https://pixabay.com/api/?key=';

function RelevantResults({currTag}) {
    // const {tagRes} = useContext(SearchContext);
    const [results, setResults] = useState();

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`${URL}${API_KEY}&q=${currTag}`);
            const imgData = await response.json();
            setResults(imgData.hits);
        }

        fetchData();
    })

    const breakpoints = {
        default: 4,
        1100: 2,
        700: 1
    }

    if(!results) return <div>Loading....</div>

    return (
        
            <section>

            <Masonry 
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                    {results ? results.map((result, i)=><TagResults result={result} key={i} />) : ''}
            </Masonry>
        </section>
    
    )
}

export default RelevantResults
