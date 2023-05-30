import styles from '../styles/App.module.css'
import testimg from '../img/test.jpg'
import testimg2 from '../img/asd.jpg'
import testimg3 from '../img/fegds.jpg'
import NewsCard from '../parts/NewsCard'


function News(){
    return(
        <>
        <div className={styles.newscontainer}>
            <NewsCard 
            title='Test Title'
            para='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut quam voluptas illo pariatur obcaecati voluptates, incidunt dolorem! Deserunt voluptate excepturi cum vero ex qui rem at itaque esse expedita Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus ut iusto, suscipit quam dolores, alias ea neque omnis eos est iure illum repudiandae eaque unde iste consequuntur soluta possimus.'
            img={testimg}
            />

            <NewsCard
            title='Test Title 2'
            para='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut quam voluptas illo pariatur obcaecati voluptates, incidunt dolorem! Deserunt voluptate excepturi cum vero ex qui rem at itaque esse expedita Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus ut iusto, suscipit quam dolores, alias ea neque omnis eos est iure illum repudiandae eaque unde iste consequuntur soluta possimus.'
            img={testimg2}
            />

            <NewsCard
            title='Test Title 3'
            para='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut quam voluptas illo pariatur obcaecati voluptates, incidunt dolorem! Deserunt voluptate excepturi cum vero ex qui rem at itaque esse expedita Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus ut iusto, suscipit quam dolores, alias ea neque omnis eos est iure illum repudiandae eaque unde iste consequuntur soluta possimus.'
            img={testimg3}
            />

            <div className={styles.emptydiv}/>
        </div>

        </>
    )
}

export default News