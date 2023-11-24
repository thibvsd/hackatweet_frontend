import styles from "../styles/Tweet.module.css";
import React from "react";
import Image from "next/image";
import Logo from "../assets/pineapple.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
  console.log('props', props);
  return (
    <div className={styles.tweet}>
      <div className={styles.tweetUp}>
        <Image width={25}
        height={50} src={Logo} alt="pineapple" />
        <p>jeanclaude</p>
      </div>
      <div>
        <div>
          <p>{props.content}</p>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
