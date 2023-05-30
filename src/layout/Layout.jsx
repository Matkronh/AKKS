import { Link, Outlet } from 'react-router-dom'

import styles from '../styles/App.module.css'

function Layout() {
    return(
        <>
            <div className={styles.navbar}>
                <div className={styles.navlogo}>
                    <Link className={styles.navlogotext} to='/AKKS'>AKKS</Link>
                </div>
                <div className={styles.navinvis}/>

                    <Link className={styles.navlink} to='/AKKS/news'>News</Link>
                    <Link className={styles.navlink} to='/AKKS/under'>Company Info</Link>
                    <Link className={styles.navlink} to='/AKKS/under'>Financial Info</Link>
                    <Link className={styles.navlink} to='/AKKS/under'>Help</Link>
                    <Link className={styles.navlink} to='/AKKS/under'>Sign in</Link>
            </div>

            <Outlet/>
        </>
    )
}

export default Layout