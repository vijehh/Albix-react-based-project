import { useContext } from 'react'
// import styles from './SearchResults.module.scss'
import { SearchContext } from '../Context/SearchContext'
import Results from '../ui/Results';
import Masonry from 'react-masonry-css';
import Navbar from '../ui/Navbar';

function QueryResults() {
    const {results} = useContext(SearchContext);
    // console.log(results);
    const breakpoints = {
        default: 4,
        1100: 2,
        700: 1
    }
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
