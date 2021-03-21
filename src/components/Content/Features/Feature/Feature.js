import React from 'react';
import styles from './Feature.module.css';

const Feature = ({ icon, title, desc }) => (
    <div className="col span-1-of-4 box">
        <ion-icon name={icon} class={styles.Icon} />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
);

export default Feature;
