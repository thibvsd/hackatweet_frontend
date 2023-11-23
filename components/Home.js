
import Head from 'next/head';
import LastTweets from './LastTweets';
import Trends from './Trends';
import styles from '../styles/Home.module.css';

function Home() {

    /*const likes = useSelector((state) => state.likes.value);
    const lastTweets = useSelector((state) => state.lastTweets.value);

    const [articlesData, setArticlesData] = useState([]);
    const [topArticle, setTopArticle] = useState({});
  
    useEffect(() => {
      fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(data => {
          //setTopArticle(data.articles[0]);
          //setArticlesData(data.articles.filter((data, i) => i > 0));
        });
    }, []);
  
    const tweets = articlesData.map((data, i) => {
      /*const isBookmarked = bookmarks.some(bookmark => bookmark.title === data.title);
      const isHidden = hiddenArticles.some(hiddenArticle => hiddenArticle.title === data.title);
      if(!isHidden) return <Article key={i} {...data} isBookmarked={isBookmarked} isHidden={isHidden} />;
    });
  
    let lastTweets;
    if (likes.some(like => like.title === topArticle.title)) {
        lastTweets = <LastTweets {...lastTweets} isLiked={true} />
    } else {
        lastTweets = <LastTweets {...lastTweets} isLiked={false} />
    }*/
    let lastTweets = <LastTweets isLiked={false} />
    let trends = <Trends isHashtag={false} />

    return (
        <div>
        <Head>
          <title>Morning News - Home</title>
        </Head>
        <div className={styles.articlesContainer}>lasttweets
          {lastTweets}
          </div>
        <div className={styles.trendsContainer}>trends
          {trends}
        </div>
      </div>
    );
   }
   
   export default Home;