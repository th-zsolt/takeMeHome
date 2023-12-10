import React, { useState } from "react";
import styles from './GridItem.module.css';
import { Link } from "react-router-dom";

const GridItem = ({item}) => {
    return (
        <Link to={`details/${item.objectID}`} id={item.objectID} className={styles.card} >
                <img src={`/src/assets/Images/${item.image}`} className={styles.dog} />
                <h2 className={styles.title}>{item.name}</h2>
        </Link>
    );
}

export default GridItem