/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Row from '../../utils/Row/Row';
import styles from './Form.module.css';
import Button from '../../utils/Button/Button';

const Form = () => {
    const [name, setName] = useState('Tân');
    const onInputChanged = event => setName(event.target.value);
    // eslint-disable-next-line no-alert
    const onSubmitForm = () => alert('Your message has been sent!');
    return (
        <section>
            <Row>
                <h2>Hi {name || 'stranger'}! We&apos;re happy to hear from you</h2>
            </Row>
            <Row>
                <form action="#" method="POST" className={styles.Form}>
                    <Row>
                        <div className="col span-1-of-3">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={onInputChanged}
                                placeholder="Your name"
                                required
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col span-1-of-3">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col span-1-of-3">
                            <label htmlFor="find-us">How did you find us?</label>
                        </div>
                        <div className="col span-2-of-3">
                            <select name="find-us" id="find-us" defaultValue="friends">
                                <option value="friends">Friends</option>
                                <option value="search">Search engine</option>
                                <option value="ad">Advertisement</option>
                                <option value="ad">Other</option>
                            </select>
                        </div>
                    </Row>
                    <Row>
                        <div className="col span-1-of-3">
                            <label htmlFor="news">Newsletter?</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input type="checkbox" name="news" id="news" defaultChecked /> Yes,
                            please
                        </div>
                    </Row>
                    <Row>
                        <div className="col span-1-of-3">
                            <label htmlFor="line">Drop us a line</label>
                        </div>
                        <div className="col span-2-of-3">
                            <textarea
                                name="message"
                                id="line"
                                cols="30"
                                rows="3"
                                placeholder="Your message"
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col span-1-of-3">
                            <label htmlFor="send">&nbsp;</label>
                        </div>
                        <div className="col span-2-of-3">
                            <Button type="full" clickEvent={onSubmitForm} href="/">
                                Send it!
                            </Button>
                        </div>
                    </Row>
                </form>
            </Row>
        </section>
    );
};

export default Form;
