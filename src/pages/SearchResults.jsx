import { useContext } from 'react'
import styles from './SearchResults.module.scss'
import { SearchContext } from '../Context/SearchContext'
import Results from '../ui/Results';

function SearchResults() {
    const {results} = useContext(SearchContext);
    console.log(results);
    return (
        <section>
            <div className={styles.img__container}>
                {results ? results.map((result, i)=><Results result={result} key={i} />) : ''}
            </div>
        </section>
    )
}

export default SearchResults
