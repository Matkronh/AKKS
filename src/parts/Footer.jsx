import styles from '../styles/App.module.css'

function Footer(){
    return(
        <div className={styles.footer}> 
            <div className={styles.invisfooter}/>
            <div className={styles.subfooter}>
                <p className={styles.footertext}>
                    Footer Text
                </p>
                <p className={styles.footertext}>
                    Copyright information TM 2019-2049
                </p>
            </div>
        </div>
    )
}

export default Footer