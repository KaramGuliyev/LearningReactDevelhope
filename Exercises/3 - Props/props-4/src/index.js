import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from '../../props-4/src/App';

function Adrian(name) {
    return (
        <h1>{name}</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Welcome name={Adrian("Adrian")} age="25"/>
);


