import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {store} from './store/configStore';
import {Provider} from 'react-redux';


ReactDOM.render((
                <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                <Provider store = {store}>
                <App />
                </Provider>
                </BrowserRouter>
                </I18nextProvider>
                ) , document.getElementById('root'));
registerServiceWorker();
