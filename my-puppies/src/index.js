import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/roboto/Roboto-Regular.ttf';
import './assets/fonts/roboto/Roboto-Bold.ttf';
import './index.scss';
import App from './components/App/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers()
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
