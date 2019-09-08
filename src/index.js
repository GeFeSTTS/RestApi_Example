import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Routers from './routers';
import './index.css';

import * as reducers from './store/reducers/reducer';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    document.getElementById('root')
);

