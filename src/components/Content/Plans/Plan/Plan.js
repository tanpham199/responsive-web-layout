import React from 'react';
import PlanBenefit from './PlanBenefit/PlanBenefit';
import Button from '../../../utils/Button/Button';
import styles from './Plan.module.css';

const Plan = ({ title, type, price, pricePerMeal, benefits, recommended, clickEvent }) => (
    <div className="col span-1-of-3">
        <div className={styles.PlanBox}>
            <div>
                <h3>{title}</h3>
                <p className={styles.PlanPrice}>
                    {price} <span>/ {type}</span>
                </p>
                <p className={styles.PlanPriceMeal}>
                    {type === 'month' ? (
                        `That’s only ${pricePerMeal} per meal`
                    ) : (
                        <span>&nbsp;</span>
                    )}
                </p>
            </div>
            <div>
                <ul>
                    {benefits.map((benefit, i) => (
                        <PlanBenefit key={`benefit ${i.toString()}`} {...benefit} />
                    ))}
                </ul>
            </div>
            <div>
                <Button type={recommended ? 'full' : 'ghost'} href="/" clickEvent={clickEvent}>
                    Sign up now
                </Button>
            </div>
        </div>
    </div>
);

export default Plan;
