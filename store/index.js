
// store/index.js

import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

import {
  STORE_PRODUCTS,
  STORE_CATEGORIES,
} from './actions/actionTypes';

// Declare initial state
const initialState = {
  categories: [],
  products: [],
};

// Create reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      // These are server side rendered from MyApp.getInitialProps, everything else should
      // come from client side state and should not be overwritten here by subsequent server
      // side hydration actions.
      const { categories, products } = action.payload;
      return { ...state, categories, products };
    // Dispatch in App SSR
    // Check if action dispatched is STORE_CATEGORIES and act on that
    case STORE_CATEGORIES:
      return { ...state, categories: action.payload };
    // Dispatch in App SSR
    // Check if action dispatched is STORE_PRODUCTS and act on that
    case STORE_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

// Enable Redux dev tools
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__(
    // { trace: true, traceLimit: 25 }
  )
  : f => f;
// Create a makeStore function and pass in reducer to create the store
const makeStore = () => {
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk), devtools)
  );
};
const debug = !process.env.NETLIFY;
// Export an assembled wrapper with store's data
export const wrapper = createWrapper(makeStore, { debug });
