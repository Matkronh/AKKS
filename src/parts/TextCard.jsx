import styles from '../styles/App.module.css'


function TextCard(props){
    return(
        <div className={styles.textContainer}>
            <div className={styles.textCard}>
                <p className={styles.textCardStyle}>{props.para}</p>
                <div className={styles.textCardFlex}>
                    <img className={styles.pictureblock} src={props.imgname}/>
                    <div className={styles.invisblock}/>
                </div>
            </div>

            <div className={styles.asd}>
                
            </div>
        </div>
    )
}

export default TextCard