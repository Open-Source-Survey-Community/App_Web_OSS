import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
                <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                <App />
                </BrowserRouter>
                </I18nextProvider>
                ) , document.getElementById('root'));
registerServiceWorker();
