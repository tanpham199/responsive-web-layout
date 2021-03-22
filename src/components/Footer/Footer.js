import React from 'react';
import Row from '../utils/Row/Row';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.Footer}>
        <Row>
            <div className="col span-1-of-2">
                <ul className={styles.FooterNav}>
                    <li>
                        <a href="/">About us</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Press</a>
                    </li>
                    <li>
                        <a href="/">iOS App</a>
                    </li>
                    <li>
                        <a href="/">Android App</a>
                    </li>
                </ul>
            </div>

            <div className="col span-1-of-2">
                <ul className={styles.SocialLink}>
                    <li>
                        <a className={styles.Facebook} href="/">
                            <ion-icon name="logo-facebook" />
                        </a>
                    </li>
                    <li>
                        <a className={styles.Twitter} href="/">
                            <ion-icon name="logo-twitter" />
                        </a>
                    </li>
                    <li>
                        <a className={styles.Instagram} href="/">
                            <ion-icon name="logo-instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </Row>
        <Row>
            <p>Copyright &copy; 2021 by Omnifood. All rights reserved</p>
        </Row>
    </footer>
);

export default Footer;
