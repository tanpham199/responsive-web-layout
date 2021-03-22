import React from 'react';
import styles from './PlanBenefit.module.css';

const PlanBenefit = ({ support, detail }) => (
    <li className={styles.Line}>
        <ion-icon name={support ? 'checkmark-outline' : 'close-outline'} class={styles.IconSmall} />
        {detail}
    </li>
);

export default PlanBenefit;
