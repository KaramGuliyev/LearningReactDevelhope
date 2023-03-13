import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from '../../props-5/src/App';

function Adrian(name) {
    return (
        <strong>{name}</strong>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Welcome name={Adrian("Adrian")} age="25"/>
);


