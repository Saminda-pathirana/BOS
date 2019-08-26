import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';

import configureStore from './store';
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const store: Store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
