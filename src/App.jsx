import styles from './styles/App.module.css'
import headerLogo from './img/akks-holding-eiendom-as-high-resolution-logo-color-on-transparent-background.png'
import bodyPicture from './img/avi-waxman-f9qZuKoZYoY-unsplash.jpg'
import house1 from './img/house1.jpg'
import house2 from './img/house2.jpg'
import house3 from './img/house3.jpg'

import { Parallax } from 'react-parallax';

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={headerLogo} className={styles.logo}/>
      </div>

      <div className={styles.hero}>
        <Parallax blur={0} bgImage={bodyPicture} bgImageAlt="sky photo over some houses" strength={500}>
          <div className={styles.testdiv}>
          </div>
        </Parallax>
      </div>
      
      <div className={styles.body}>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <img src={house1} className={styles.cardHouse}/>
                <p className={styles.cardPara}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima.</p>
                <h1 className={styles.cardTitle}>Buy a Home</h1>
              </div>
              <div className={styles.card}>
                <img src={house2} className={styles.cardHouse}/>
                <p className={styles.cardPara}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima.</p>
                <h1 className={styles.cardTitle}>Sell a Home</h1>
              </div>
              <div className={styles.card}>
                <img src={house3} className={styles.cardHouse}/>
                <p className={styles.cardPara}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima.</p>
                <h1 className={styles.cardTitle}>Rent a Home</h1>
              </div>
            </div>
      </div>

      <div className={styles.footer}>

      </div>

    </div>
  )
}

export default App
