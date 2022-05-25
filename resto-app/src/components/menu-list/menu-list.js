import React, {Component} from 'react';
import {connect} from 'react-redux';

import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested} from "../../actions";
import Spinner from "../spinner";


class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {restoService} = this.props;
        restoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
    }

    render() {
        const {menuList, loading} = this.props;
        if (loading) return <Spinner/>
        return (
            <ul className="menu__list">
                {menuList.map((item) => <MenuListItem key={item.id} menuItem={item}/>)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {menuList: state.menu, loading: state.loading}
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));