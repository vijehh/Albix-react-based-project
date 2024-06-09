import styles from './Footer.module.scss'

function Footer() {
    return (<>
        <footer className={styles.footerMain}>
        <div className={styles.footer}>
            <div className={styles.logoBox}>
                <img className={styles.logo} src='../../A-logo.png'></img>
                <h1 className={styles.text__logo}>ALBIX</h1>
            </div>
            <div className={styles.copyright}>
                <span id={styles.fontBalance}>&copy;</span> 2024. Created by Vijay Sengupta
            </div>
        </div>
        <div className={styles.links}>
            <a className={styles.link} href='https://github.com/vijehh' target='_blank'>Github</a>
            <a className={styles.link} href='mailto:vijaysengupta1105@gmail.com' target='_blank'>vijaysengupta1105@gmail.com</a>
            <a className={styles.link} href='https://www.linkedin.com/in/vijay-sengupta-b6366a20b/' target='_blank'>LinkedIn</a>
        </div>
        </footer>
        </>
        
    )
}

export default Footer
