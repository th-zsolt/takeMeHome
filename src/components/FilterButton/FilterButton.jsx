import React from "react";
import styles from './FilterButton.module.css';
import funnel from '../../assets/Svgs/funnel.svg';
import { Link } from "react-router-dom";

const FilterButton = () => {

    return (
        <>        
            <Link to={`/filter`}>
                <img src={funnel} alt="" className={styles.filterButton} />
            </Link>
        </>
    )
}


export default FilterButton
