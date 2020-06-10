import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,HashRouter} from 'react-router-dom'
import { ConfigProvider  } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import store from './redux/store'
import { Provider } from 'react-redux'
import URL from './utils/url.js';
import Utils from './utils/public';
import { axios } from './utils/public.js';

React.$axios = axios
React.$url = URL
React.$utils = new Utils()
ReactDOM.render(<HashRouter>
                  <ConfigProvider  locale={zh_CN}>
                       <Provider store={store}>
                             <App />
                       </Provider>
                  </ConfigProvider >
                </HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
