import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const AppHeader = ({items}) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        total += item.price * item.count;
    }
    return (
        <header className="header">
            <Link to="/menu" className="header__link">Menu</Link>
            <Link to="/cart" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({items}) => {
    return {items};
};

export default connect(mapStateToProps)(AppHeader);