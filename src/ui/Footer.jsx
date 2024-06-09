import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoBox}>
                <img className={styles.logo} src='../../A-logo.png'></img>
                <h1 className={styles.text__logo}>ALBIX</h1>
            </div>
            <div className={styles.copyright}>
                <span id={styles.fontBalance}>&copy;</span> 2024. Created by Vijay Sengupta
            </div>
        </footer>
    )
}

export default Footer
