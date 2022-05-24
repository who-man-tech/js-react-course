import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import WithRestoService from "../hoc";
import {Route, Routes} from "react-router-dom";

const App = ({restoService}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Routes>
                <Route path="/menu" element={<MainPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </div>
    )
}

export default WithRestoService()(App);