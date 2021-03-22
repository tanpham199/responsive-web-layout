import React from 'react';
import Row from '../../utils/Row/Row';
import styles from './Plans.module.css';
import Plan from './Plan/Plan';

const plansContent = [
    {
        title: 'Premium',
        type: 'month',
        price: '$399',
        pricePerMeal: '13.30$',
        recommended: true,
        benefits: [
            {
                support: true,
                detail: '1 meal every day',
            },
            {
                support: true,
                detail: 'Order 24/7',
            },
            {
                support: true,
                detail: 'Access to newest creations',
            },
            {
                support: true,
                detail: 'Free delivery',
            },
        ],
    },
    {
        title: 'Pro',
        type: 'month',
        price: '$149',
        pricePerMeal: '14.90$',
        benefits: [
            {
                support: true,
                detail: '1 meal 10 days/month',
            },
            {
                support: true,
                detail: 'Order 24/7',
            },
            {
                support: true,
                detail: 'Access to newest creations',
            },
            {
                support: true,
                detail: 'Free delivery',
            },
        ],
    },
    {
        title: 'Starter',
        type: 'meal',
        price: '19$',
        pricePerMeal: null,
        benefits: [
            {
                support: true,
                detail: '1 meal',
            },
            {
                support: true,
                detail: 'Order from 8 am to 12 pm',
            },
            {
                support: false,
                detail: '',
            },
            {
                support: true,
                detail: 'Free delivery',
            },
        ],
    },
];

const Plans = () => {
    // eslint-disable-next-line no-alert
    const signUpHandler = () => alert('Sign Up Successfully!');
    return (
        <section className={styles.Plans} id="plans">
            <Row>
                <h2>Start eating healthy today</h2>
            </Row>
            <Row>
                {plansContent.map((plan, i) => (
                    <Plan key={`plan ${i.toString()}`} {...plan} clickEvent={signUpHandler} />
                ))}
            </Row>
        </section>
    );
};

export default Plans;
