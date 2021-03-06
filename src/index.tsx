import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import Application, {getDemoFiles} from './framework';
import './index.css';
import * as serviceWorker from './serviceWorker';

const schema: any = require('./app/schema').default;
const userComponents: any = require('./app/indices/userComponents').default;
const userFunctions: any = require('./app/indices/userFunctions').default;

function render() {
    ReactDOM.render(
        <Application
            schema={schema}
            userComponents={userComponents}
            userFunctions={userFunctions}
        />,
        document.getElementById('root')
    );
}

if (process.env.NODE_ENV !== 'production') {
    const packageJson = require('../package.json');
    ReactDOM.render(
        <Application
            name={packageJson.name}
            version={packageJson.version}
            schema={schema}
            userComponents={userComponents}
            userFunctions={userFunctions}
        />,
        document.getElementById('root')
    );
} else {
    render();
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
