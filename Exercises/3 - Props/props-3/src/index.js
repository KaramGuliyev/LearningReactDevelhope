import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Welcome name="Adrian" age="25"/>
);

// Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".
