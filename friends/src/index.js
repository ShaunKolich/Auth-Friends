import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../src/components/reducer'


const logger = (store) => (next) => (action) => {
    console.log('Prev State', store.getState())
    console.log('Action', action)
    next(action)
    console.log('New State', store.getState())
}

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk, logger),
    )
)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


