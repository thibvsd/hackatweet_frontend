import styles from "../styles/Tweet.module.css";
import { useEffect, useState } from "react";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from "../images/pineapple.png";

function Tweet() {
  const [caractere, setCaractere] = useState("");
  const [dbTweet, setDbTweet] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 280) {
      setCaractere(inputValue);
    }
  };

  const addTweet = () => {
    const contentTweet = document.querySelector('#idContent').value;
    console.log(contentTweet);
    fetch("http://localhost:3000/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: contentTweet }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
        document.querySelector('#idContent').value = '';
        }
      });
  }

  fetch("http://localhost:3000/tweet", {
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setDbTweet(data.content)
        }
      });

  const newTweet = dbTweet.map((content, index) => (
    <div key={index} className={styles.tweet}>
      <div className={styles.tweetUp}>
        <img className={styles.imgStyle} src="../images/pineapple.png" alt="pineapple" />
        <p>jeanclaude</p>
      </div>
      <div>
        <div>
          <p>{content}</p>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  ));

  return (
    <>
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
      <div className={styles.middleDown}>{newTweet}</div>
    </>
  );
}

export default Tweet;
