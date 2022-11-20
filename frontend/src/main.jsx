import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import store from "./reducer/store";
import  { productsFetch } from "./slices/productsSlice";
import { personalFetch } from "./slices/personalSlice";
import {propertyFetch} from "./slices/propertySlice";
// import {applyMiddleware} from "redux";
// import thunk from 'redux-thunk';

store.dispatch(productsFetch());
// store.dispatch(getTotals());
store.dispatch(personalFetch());
store.dispatch(propertyFetch());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
