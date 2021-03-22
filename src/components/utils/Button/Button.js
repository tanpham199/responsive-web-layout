import React from 'react';
import styles from './Button.module.css';

const ButtonFull = ({ href, type, children, clickEvent }) => {
    const classes =
        type === 'full'
            ? [styles.Button, styles.ButtonFull].join(' ')
            : [styles.Button, styles.ButtonGhost].join(' ');
    return (
        <a className={classes} href={href} onClick={clickEvent}>
            {children}
        </a>
    );
};

export default ButtonFull;
