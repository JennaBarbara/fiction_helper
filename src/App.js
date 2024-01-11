import React from 'react';
import { hot } from 'react-hot-loader';
import MainPage from './components/MainPage';
import './App.css';

const App = () => (
    <div className="App">
        <MainPage />
    </div>
);

export default hot(module)(App);