import React, {Component} from 'react';
import Spinner from "../spinner";
import Error from "../error";
import WithRestoService from "../hoc";
import './menu-item.scss';
import {Link} from "react-router-dom";

class MenuItem extends Component {
    state = {
        loading: true,
        error: false,
        item: {}
    }

    componentDidMount() {
        this.setState({loading: true});

        const {restoService, itemId} = this.props;
        restoService.getMenuItem(itemId)
            .then(res => this.setState({loading: false, error: false, item: res}))
            .catch(() => this.setState({loading: false, error: true}));
    }

    render() {
        const {loading, error, item: {title, url, category, price}} = this.state;
        if (loading) return <Spinner/>;
        else if (error) return <Error/>;

        return (
            <div className="container">
                <div className="item">
                <div className="item__title">{title}</div>
                <img className="item__img" src={url} alt={title}></img>
                <div className="item__category">Category: <span>{category}</span></div>
                <div className="item__price">Price: <span>{price}$</span></div>
                <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button className="item__btn">Add to cart</button>
                    <img src={process.env.PUBLIC_URL + `img/${category}.png`} style={{marginLeft: 120, width: 35, borderRadius: 5}} alt={category}/>
                </span>
                </div>
            </div>
        );
    }
}

export default WithRestoService()(MenuItem);