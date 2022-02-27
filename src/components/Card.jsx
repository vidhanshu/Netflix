import React from "react";
import styles from "../styles/Card.module.scss";

function Card({ image, movie_name, duration, category, description }) {
  return (
    <div className={styles.card_container}>
      <img src={image} />
      <div className={styles.content}>
        <h2>{movie_name}</h2>
        <span className={styles.span}>{duration}</span>
        <span className={styles.span}>{category}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
