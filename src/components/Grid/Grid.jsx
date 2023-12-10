import React from "react";
import styles from './Grid.module.css';
import GridItem from './GridItem';

const Grid = ({list}) => {

    return (
        <section className={styles.grid}>
            {list.map((item) => (
                <GridItem key={item.objectID} item={item} />
            ))}
        </section>
    );
}


export default Grid



