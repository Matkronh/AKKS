import styles from '../styles/App.module.css'


function TextCard(props){
    return(
        <div className={styles.textContainer}>
            <div className={styles.textCard}>
                <p className={styles.textCardStyle}>{props.para}</p>
            </div>

            <div className={styles.textCard2}>
                <img className={styles.profilepicture} src={props.imgname}/>
            </div>
        </div>
    )
}

export default TextCard