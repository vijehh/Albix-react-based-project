import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import styles from './Navbar.module.scss';
// import { SearchContext } from '../Context/SearchContext';

function Navbar() {
    const navigate = useNavigate();
    // const {query, setQuery, searchQuery} = useContext(SearchContext);
    const [query, setQuery] = useState('');

    

    function handleSearch(e){
        e.preventDefault();
        // searchQuery();
        navigate(`/search/query/${query}`);

    }

    return (
        <div>
            <nav className={[styles.nav, styles.navigation].join(" ")}>
        {/* <!-- <img class="nav__logo" src="/src/img/pngegg.png" id="logo"> --> */}
        <h1 className={styles.nav__logo}>ALBIX</h1>
        <form className={styles.search} onSubmit={handleSearch}>
            <input type="text" placeholder="Search over 500,000 images..." className={styles.search__field} value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <button className={`btn ${styles.search__btn}`}>Search</button>
        </form>
        <ul className={styles.nav__links}> 
            <li className={styles.nav__item}><a href="#" className={`${styles.nav__link}`}>Home</a></li>
            {/* <li class="nav__item"><a href="#" class="nav__link">About</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Showcase</a></li> */}
        </ul>
    </nav>
        </div>
    )
}

export default Navbar;