import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import burgerBuilder from './store/reducer/burgerBuilder';
import orders from './store/reducer/orders';
import authentication from './store/reducer/auth';
import register from './store/reducer/register';


/* const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] dispatch' + action);
      const result = next(action);
      console.log('[Middleware]' + store);
      return result;
    }
  }
} */


const rootReducer = combineReducers({
  burgerBuilder,
  orders,
  authentication,
  register
})

 const composeEnhancers = process.env.NODE_ENV === 'development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null||  compose;
const store = createStore(rootReducer, /* preloadedState, */composeEnhancers(compose(
    applyMiddleware(thunk)
)));


const app = (
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
