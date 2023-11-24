import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import Left from "./Left";

function Hashtag() {

  const [dbTweet, setDbTweet] = useState([]);
  const [caractere, setCaractere] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/alltweet", {})
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log('alltweet data', data); 
          setDbTweet(data.content);
        }
      });
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 280) {
      setCaractere(inputValue);
    }
  };

  
  const addHashtag = () => {
    const contentTweet = document.querySelector('#idContent').value;    
    console.log("dans addHashtag: " + contentTweet);
    fetch("http://localhost:3000/alltweet", {
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

  const contentMap = dbTweet.map((data, i) => {
    return <Tweet key={i} {...data} />;
  });

  return (
    <div className={styles.homeContainer}>
      <div className={styles.left}><Left></Left></div>
      <div className={styles.middle}>
        <div className={styles.middleHeader}>
            <h1>Hashtag</h1>
          <input
            id="idContent"
            value={caractere}
            onChange={handleInputChange}
            placeholder="Hashtag"
          ></input>
          <button onClick={() => addHashtag()}>Tweet</button>
        </div>
        <div className={styles.middleDown}>{contentMap}</div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Hashtag;
