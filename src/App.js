import Content from './components/Content/Content';
import Header from './components/Header/Header';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Content />
            <div style={{ height: '2000px' }}></div>
        </>
    );
};

export default App;
