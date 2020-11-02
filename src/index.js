import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {provider} from "react-redux"

ReactDOM.render(<provider><App /></provider>,  document.getElementById('root'));
