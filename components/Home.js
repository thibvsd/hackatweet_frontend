import Head from "next/head";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";

function Home() {
  let lastTweets = <LastTweets isLiked={false} />;
  let trends = <Trends isHashtag={false} />;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.left}></div>
      <div className={styles.middle}>
        <div className={styles.right}>
          <Tweet></Tweet>
        </div>
      </div>
    </div>
  );
}

export default Home;
