import Head from "next/head";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import Left from "./Left";
import { useEffect, useState } from "react";
import { addTweet } from '../reducers/tweet';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();

  const [dbTweet, setDbTweet] = useState([]);
  const [caractere, setCaractere] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/tweet", {})
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log('data', data); 
          setDbTweet( data.content );
        }
      });
  }, []);
  console.log("dans dbTweet: " + dbTweet);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 280) {
      setCaractere(inputValue);
    }
  };

  const addTweet = () => {
    const contentTweet = document.querySelector('#idContent').value;
    console.log("dans l addTweet: " + contentTweet);
    fetch("http://localhost:3000/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: contentTweet }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          //dispatch(addTweet(data.content));
        document.querySelector('#idContent').value = '';
        }
      });
  }

  const contentMap = dbTweet.map((data, i) => {
    console.log('dans le map: ' + data);
    return <Tweet key={i} content={data} />;
  });

  return (
    <div className={styles.homeContainer}>
    <div className={styles.left}><Left></Left></div>
      <div className={styles.middle}>
        <div className={styles.middleHeader}>
          <input
            id="idContent"
            value={caractere}
            onChange={handleInputChange}
            placeholder="What's up ?"
          ></input>
          <button onClick={() => addTweet()}>Tweet</button>
          <p>{caractere.length}/280</p>
        </div>
        <div className={styles.middleDown}>{contentMap}</div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Home;
