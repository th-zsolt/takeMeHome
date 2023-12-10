import React from "react";
import styles from "./Item.module.css"

const Item = ({item}) => (
    <span className={styles.item}>{ item }</span> 
);

export default Item

