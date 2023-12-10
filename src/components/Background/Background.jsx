import React from "react";
import styles from './Background.module.css';

const Background = ({style}) => {

    switch (style) {
        case 'main':
            return (
                <div>
                    <div className={styles.main}></div>
                </div>
            );
        case 'details':
            return (
                <div>
                    <div className={styles.details}></div>
                </div>
            );
        default:
            return (
                <div>
                    <div className={styles.main}></div>
                </div>
            );
      }

}

export default Background