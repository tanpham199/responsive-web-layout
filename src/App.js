import React, { useEffect } from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
};

export default App;
