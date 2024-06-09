import styles from './About.module.scss'
import Footer from './Footer'
import Navbar from './Navbar'

function About() {
    return (
        <>
        <Navbar />
        <div className={styles.about} id="about">
            <h1>
                About ALBIX
            </h1>
            <p>
                A image search website mainly made using React and Apis
            </p>
            <div>
                Smth
            </div>
        </div>
        <Footer />
        </>
    )
}

export default About
