import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavBar.module.css';
import logoWhite from './logo-white.png';
import logo from './logo.png';
import Row from '../../Row/Row';

const navItemContent = [
    {
        href: '#features',
        text: 'Food delivery',
    },
    {
        href: '#works',
        text: 'How it works',
    },
    {
        href: '#cities',
        text: 'Our cities',
    },
    {
        href: '#plans',
        text: 'Sign up',
    },
];

const NavBar = ({ sticky }) => {
    const navClass = sticky ? styles.Sticky : '';
    return (
        <nav className={navClass}>
            <Row>
                <img src={logoWhite} alt="Omnifood logo" className={styles.Logo} />
                <a href="#header">
                    <img src={logo} alt="Omnifood logo" className={styles.LogoBlack} />
                </a>
                <ul className={styles.NavMenu}>
                    {navItemContent.map((content, i) => (
                        <NavItem key={`navItem ${i}`} href={content.href}>
                            {content.text}
                        </NavItem>
                    ))}
                </ul>
                <button className={styles.MobileNavBarIcon}>
                    <i className="ion-navicon-round"></i>
                </button>
            </Row>
        </nav>
    );
};

export default NavBar;
