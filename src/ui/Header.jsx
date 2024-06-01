
import styles from './Header.module.scss';


function Header() {

    return (

        <div>
            <header className={`${styles.header}`}>
                <div className={`u-text-align-center`}>
                    <h1 className={`${styles.heading__primary} ${styles.heading}`}>
                        <span className={styles[`heading__primary--main`]}>ALBIX</span>
                        <span className={styles[`heading__primary--sub`]}>Image Search Online</span>
                    </h1>
                </div>
        </header>
        </div>
    )
}

export default Header
