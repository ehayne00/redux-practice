import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

const store = createStore(rootReducer)

//now that we have created store we can call things on the store like...
// console.log(store.getState())    ... getState will retrieve the state for you
// store.dispatch({ type: 'DOWNVOTE_MEMBER', payload: 2})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


