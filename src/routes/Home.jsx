import styles from '../styles/App.module.css'
import { Parallax } from 'react-parallax';
import headerLogo from '../img/akks-holding-eiendom-as-high-resolution-logo-color-on-transparent-background.png'
import bodyPicture from '../img/avi-waxman-f9qZuKoZYoY-unsplash.jpg'
import Card from '../parts/Card'
import house1 from '../img/house1.jpg'
import house2 from '../img/house2.jpg'
import house3 from '../img/house3.jpg'
import profilepic from '../img/mm.jpg'
import TextCard from '../parts/TextCard';
import MediaQuery from 'react-responsive'

function Home(){
    return(
        <div className={styles.container}>

        <div className={styles.hero}>
        <MediaQuery maxWidth={600}>
          <Parallax blur={0} bgImage={bodyPicture} bgImageAlt="sky photo over some houses" strength={100}>
            <div className={styles.paracontainer}>
              <div className={styles.header}>
                <img src={headerLogo} className={styles.logo}/>
              </div>
            </div>
          </Parallax>
          </MediaQuery>
          <MediaQuery minWidth={600}>
          <Parallax blur={0} bgImage={bodyPicture} bgImageAlt="sky photo over some houses" strength={300}>
            <div className={styles.paracontainer}>
              <div className={styles.header}>
                <img src={headerLogo} className={styles.logo}/>
              </div>
            </div>
          </Parallax>
          </MediaQuery>
        </div>
        
        <div>
              <div className={styles.cardContainer}>
                <Card 
                imgname={house1}
                title='Buy a Home'
                para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima.'
                />  
                <Card 
                imgname={house2}
                title='Sell a Home'
                para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima.'
                />
                <Card 
                imgname={house3}
                title='Rent a Home'
                para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima.'
                />
              </div>

                <TextCard 
                para='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero error non dignissimos ex repellendus, eum, porro nihil quidem iusto veniam fugiat libero delectus natus quod! Nemo quo deleniti nihil minus?'
                imgname={profilepic}
                />


                <div className={styles.footer}>

                </div>
        </div>
      </div>
    )
}

export default Home