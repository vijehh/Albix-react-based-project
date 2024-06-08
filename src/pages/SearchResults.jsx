import { useEffect, useState } from 'react'
// import styles from './SearchResults.module.scss'
// import { SearchContext } from '../Context/SearchContext'
// import Results from '../ui/Results';
// import Masonry from 'react-masonry-css';
import Navbar from '../ui/Navbar';
import { Outlet, useParams } from 'react-router-dom';

// const API_KEY = '42857731-1529682eb076fe57ea890d75d';
// const URL = 'https://pixabay.com/api/?key=';

function SearchResults() {
    // const {results} = useContext(SearchContext);
    const {queryNav, idNav} = useParams();
    // const formatQuery = queryNav.replaceAll(' ', '+');
    const [query, setQuery] = useState('');
    const [id, setId] = useState()

    useEffect(()=>{
        setQuery(queryNav);
        setId(idNav)
    }, [queryNav, idNav]);

    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         const response = await fetch(`${URL}${API_KEY}&q=${query}`);
    //         const imgData = await response.json();
    //         setResults(imgData.hits);
    //     }

    //     fetchData();

    // }, [query, setResults]);
    // console.log(results);
    return (<>
        <Navbar />
        <Outlet context={[query, id]} />
        </>
    )
}

export default SearchResults
