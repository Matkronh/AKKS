import styles from '../styles/App.module.css'
import underConstruction from '../img/underconstruction.webp'

function UnderConstruction(){
    return(
        <div className={styles.newscontainer}>
            <h1 className={styles.underconst}>This part of the website is under construction.</h1>
            <img src={underConstruction} className={styles.underConstruction}/>
        </div>
    )
}

export default UnderConstruction