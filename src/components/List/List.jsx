import React from "react";
import Item from "./Item";
import styles from "./List.module.css"

const List = ({list}) => (
    <section className={styles.list}>
     {list.map((item) => (
       <Item key={item.objectID} item={item.name} />
     ))}
   </section>
 );

export default List

