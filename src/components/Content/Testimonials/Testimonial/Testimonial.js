import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = ({ blockquote, src, alt, name }) => (
    <div className="col span-1-of-3">
        <blockquote className={styles.Blockquote}>
            {blockquote}
            <cite className={styles.Cite}>
                <img src={src} alt={alt} />
                {name}
            </cite>
        </blockquote>
    </div>
);

export default Testimonial;
