import React, { useEffect } from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Content />
            <div style={{ height: '2000px' }} />
        </>
    );
};

export default App;
