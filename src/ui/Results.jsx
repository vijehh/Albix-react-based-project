import styles from './Results.module.scss'

function Results({result}) {
    console.log(result);
    return (
        <figure className={styles.img__wrapper}>
        <div className={styles.img__sizer}></div>
        <a className={styles.img__link} href="#${this._data.id}">
            <div className={`${styles.img__overlay}`}>
                <form className={styles[`img__form-overlay`]}>
                    <label className="label__like">
                        <i className="lni lni-heart svg svg__like"><span className="label">1900</span></i>
                    </label>
                    <label className="label__search">   
                        <i className="lni svg lni-search-alt svg__magnify"></i>
                    </label>
                </form>
                
            </div>
            <img className={styles.img__image} src={result.largeImageURL}
            alt="Smth"></img>
        </a> 
    </figure>
    )
}

export default Results
