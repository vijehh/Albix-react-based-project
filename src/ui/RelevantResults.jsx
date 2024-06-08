import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../Context/SearchContext"
import Masonry from "react-masonry-css";
// import Results from "./Results";
import TagResults from "./TagResults";

const API_KEY = '42857731-1529682eb076fe57ea890d75d';
const URL = 'https://pixabay.com/api/?key=';

function RelevantResults({currTag}) {
    // const {tagRes} = useContext(SearchContext);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        setPage(1);
        setResults([]);
    },[currTag])

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`${URL}${API_KEY}&q=${currTag}&page=${page}`);
            const imgData = await response.json();
            setResults(prev=>[...prev, ...imgData.hits]);
        }

        fetchData();
    },[page, currTag])

    useEffect(()=>{

        const handleScroll = ()=>{
            // console.log('page: ',page);
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage(prev=>prev+1);
            }
        };

        const debouncedHandleScroll = debounce(handleScroll, 200);

        window.addEventListener('scroll', debouncedHandleScroll);

        return window.removeEventListener('scroll', handleScroll);
    }, [])

    const breakpoints = {
        default: 4,
        1100: 2,
        700: 1
    }

    // if(!results) return <div>Loading....</div>

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


function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}