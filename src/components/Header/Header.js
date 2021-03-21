import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { Waypoint } from 'react-waypoint';

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
        return (
            <>
                <header id="header" className={styles.Header}>
                    <NavBar sticky={this.state.sticky} />
                    <div className={styles.HeroTextBox}>
                        <h1>
                            Goodbye junk food.
                            <br />
                            Hello super healthy meals.
                        </h1>
                        <Button href="#plans" type="full">
                            I'm hungry
                        </Button>
                        <Button href="#features" type="ghost">
                            Show me more
                        </Button>
                    </div>
                </header>
                <Waypoint onEnter={this.onEnterViewport} onLeave={this.onLeaveViewport}></Waypoint>
            </>
        );
    }
}

export default Header;
