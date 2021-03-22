import React from 'react';
import Row from '../../utils/Row/Row';
import Testimonial from './Testimonial/Testimonial';
import styles from './Testimonials.module.css';
import cus1 from './TestimonialsPhotos/customer-1.jpg';
import cus2 from './TestimonialsPhotos/customer-2.jpg';
import cus3 from './TestimonialsPhotos/customer-3.jpg';

const testimonialsContent = [
    {
        blockquote:
            "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!",
        src: cus1,
        alt: 'Alberto Duncan',
        name: 'Alberto Duncan',
    },
    {
        blockquote:
            'Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!',
        src: cus2,
        alt: 'Joana Silva',
        name: 'Joana Silva',
    },
    {
        blockquote:
            "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!",
        src: cus3,
        alt: 'Milton Chapman',
        name: 'Milton Chapman',
    },
];

const Testimonials = () => (
    <section className={styles.Testimonials}>
        <Row>
            <h2>Our customers can&apos;t live without us</h2>
        </Row>
        <Row>
            {testimonialsContent.map((testimonial, i) => (
                <Testimonial key={`testimonial ${i.toString()}`} {...testimonial} />
            ))}
        </Row>
    </section>
);

export default Testimonials;
