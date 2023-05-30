import styles from '../styles/App.module.css'

function Card(props){
    return(
        <div className={styles.card}>
            <img src={props.imgname} className={styles.cardHouse}/>
            <p className={styles.cardPara}>{props.para}</p>
            <h1 className={styles.cardTitle}>{props.title}</h1>
        </div>
    )
}

export default Card