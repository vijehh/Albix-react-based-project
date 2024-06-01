import styles from './Navbar.module.scss';

function Navbar() {
    return (
        <div>
            <nav className={[styles.nav, styles.navigation].join(" ")}>
        {/* <!-- <img class="nav__logo" src="/src/img/pngegg.png" id="logo"> --> */}
        <h1 className={styles.nav__logo}>ALBIX</h1>
        <form className={styles.search}>
            <input type="text" placeholder="Search over 500,000 images..." className={styles.search__field}></input>
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