
import { useRouter } from 'next/router';
import Trends from "./Trends";
import styles from "../styles/Home.module.css";
import LastTweets from "./LastTweets";
import Left from "./Left";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { addTweet, loadTweets } from '../reducers/tweets';

function Home() {

  const [dbTweet, setDbTweet] = useState([]);
  const [caractere, setCaractere] = useState("");

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
  
  useEffect(() => {
    if (!user.token) {
      return;
    }
    fetch(`http://localhost:3000/tweets/all/${user.token}`)
      .then(response => response.json())
      .then(data => {
        data.result && dispatch(loadTweets(data.tweets));
      });
  }, []);

  const handleInputChange = (e) => {
    if (e.target.value.length <= 280) {
      setCaractere(e.target.value);
    }
  };
  const letterCount = caractere.length;

  const handleSubmit = () => {
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: user.token, content: caractere }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          const createdTweet = { ...data.tweet, author: user };
          dispatch(addTweet(createdTweet));
          setCaractere('');
        }
      });
  };

  return (
    <div className={styles.homeContainer}>
    <div className={styles.left}><Left></Left></div>
      <div className={styles.middle}><h1>Home</h1>
        <input
          id="idContent"
          value={caractere}
          onChange={handleInputChange}
          placeholder="What's up ?"
        ></input>
        <input type="hidden" name="_id" value={user._id} />
        <div className={styles.middleHeader}>
          <p>{letterCount}/280 </p>
          <button onClick={() => handleSubmit()}>Tweet</button>
        </div>
        <div className={styles.middleDown}>
          <LastTweets />
        </div>
      </div>
      <div className={styles.right}><Trends></Trends></div>
    </div>
  );
}

export default Home;
