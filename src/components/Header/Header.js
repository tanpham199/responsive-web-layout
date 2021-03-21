import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css';
import Button from '../utils/Button/Button';

class Header extends Component {
    state = {
        sticky: false,
    };

    onEnterViewport = () => {
        this.setState({ sticky: false });
    };

    onLeaveViewport = () => {
        this.setState({ sticky: true });
    };

    render() {
        const { sticky } = this.state;
        return (
            <>
                <header id="header" className={styles.Header}>
                    <NavBar sticky={sticky} />
                    <div className={styles.HeroTextBox}>
                        <h1>
                            Goodbye junk food.
                            <br />
                            Hello super healthy meals.
                        </h1>
                        <Button href="#plans" type="full">
                            I&apos;m hungry
                        </Button>
                        <Button href="#features" type="ghost">
                            Show me more
                        </Button>
                    </div>
                </header>
                <Waypoint onEnter={this.onEnterViewport} onLeave={this.onLeaveViewport} />
            </>
        );
    }
}

export default Header;
