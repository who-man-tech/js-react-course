import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './index.scss';
import {Provider} from "react-redux";
import store from "./store";
import ErrorBoundary from "./components/error-boundary";
import RestoServiceContext from "./components/resto-service-context";
import RestoService from "./services/resto-service";
import {BrowserRouter as Router} from "react-router-dom";

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));

