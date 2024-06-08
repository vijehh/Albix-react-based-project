import { useEffect, useState } from 'react'
// import styles from './SearchResults.module.scss'
// import { SearchContext } from '../Context/SearchContext'
import Results from '../ui/Results';
import Masonry from 'react-masonry-css';
// import Navbar from '../ui/Navbar';
import { useOutletContext } from 'react-router-dom';

const API_KEY = '42857731-1529682eb076fe57ea890d75d';
const URL = 'https://pixabay.com/api/?key=';

function QueryResults() {
    // console.log(props);
    const [queryNav] = useOutletContext();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        setQuery(queryNav);
        setPage(1);
        setResults([]);
    }, [queryNav]);

    useEffect(()=>{
        // setIsLoading(true);
        const fetchData = async () =>{
            if(!query) return;
            const response = await fetch(`${URL}${API_KEY}&q=${query}&page=${page}`);
            const imgData = await response.json();
            setResults((prev)=>[...prev, ...imgData.hits]);
            // setResults(imgData.hits);
            // setIsLoading(false);
        }

        fetchData();
    }, [query,page]);

    

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
    // console.log(results);
    

    function handleClick(e){
        e.preventDefault();
        setPage((prev)=>prev+1)
    }
    const breakpoints = {
        default: 4,
        1100: 2,
        700: 1
    }

    // searchQuery();
    // if(isLoading) return <div> Loading ...</div>

    return (<>
        <section>
            

            <Masonry 
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                    {results ? results.map((result, i)=><Results result={result} key={i} />) : ''}
            </Masonry>
        </section>
        <button onClick={handleClick}>Next page</button>
        </>
    )
}

export default QueryResults

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