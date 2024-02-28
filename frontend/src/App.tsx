import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <Layout>
            <Navbar/>
            <button className='btn rounded-full btn-neutral'>Button</button>
        </Layout>
    );
}

export default App;
