import React from 'react';
import styles from './Meal.module.css';

const Meal = ({ src, alt }) => (
    <li className={styles.Meal}>
        <figure className={styles.Photo}>
            <img src={src} alt={alt} />
        </figure>
    </li>
);

export default Meal;
