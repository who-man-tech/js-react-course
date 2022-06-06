import React from 'react';
import './menu-list-item.scss';
import {Link} from "react-router-dom";

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {id, title, url, category, price} = menuItem;

    return (
        <li className="menu__item">
            <div className="menu__title">
                <Link to={`/menu/${id}`}>{title}</Link>
            </div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
                <img src={process.env.PUBLIC_URL + `img/${category}.png`} style={{marginLeft: 120, width: 35, borderRadius: 5}} alt={category}/>
            </span>
        </li>
    )
}

export default MenuListItem;