import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import ReduxContext from './store/context';
import { store } from './store';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ReduxContext.Provider value={store}>
                <App />    
        </ReduxContext.Provider>
);