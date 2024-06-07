import { useContext } from 'react'
import styles from './SearchResults.module.scss'
import { SearchContext } from '../Context/SearchContext'
import Results from '../ui/Results';
import Masonry from 'react-masonry-css';
import Navbar from '../ui/Navbar';
import { Outlet } from 'react-router-dom';

function SearchResults() {
    const {results} = useContext(SearchContext);
    // console.log(results);
    return (<>
        <Navbar />
        <Outlet />
        </>
    )
}

export default SearchResults
