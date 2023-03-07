import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page from "./prac/pagination"
import {Stateprovider} from "./stateprovider"
import {reducer,intialstate} from "./reducer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stateprovider reducer={reducer} intialstate={intialstate}>

    <App />
    </Stateprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
