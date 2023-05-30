import styles from '../styles/App.module.css'


function NewsCard(props){
    return(
        <div className={styles.newsparagraph}>
            <h1 className={styles.newsheadline}>{props.title}</h1>
                <div className={styles.textNphoto}>
                    <p className={styles.newsparagraphtext}>{props.para}</p>
                    <img className={styles.newsphoto} src={props.img}/>
                </div>
        </div>
    )
}


export default NewsCard