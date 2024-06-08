import { useContext, useEffect, useState } from 'react'
// import styles from './SearchResults.module.scss'
import { SearchContext } from '../Context/SearchContext'
import Results from '../ui/Results';
import Masonry from 'react-masonry-css';
import Navbar from '../ui/Navbar';
import { useOutletContext, useParams } from 'react-router-dom';

const API_KEY = '42857731-1529682eb076fe57ea890d75d';
const URL = 'https://pixabay.com/api/?key=';

function QueryResults() {
    // console.log(props);
    const [query] = useOutletContext();

    // const {results, searchQuery} = useContext(SearchContext);
    // const {queryNav} = useParams();
    // queryNav.replaceAll(' ', '+');
    // const [query, setQuery] = useState(queryNav);
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        const fetchData = async () =>{
            const response = await fetch(`${URL}${API_KEY}&q=${query}`);
            const imgData = await response.json();
            setResults(imgData.hits);
            setIsLoading(false);
        }

        fetchData();
    }, [query]);
    // console.log(results);
    const breakpoints = {
        default: 4,
        1100: 2,
        700: 1
    }

    // searchQuery();
    if(isLoading) return <div> Loading ...</div>

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
        </>
    )
}

export default QueryResults
