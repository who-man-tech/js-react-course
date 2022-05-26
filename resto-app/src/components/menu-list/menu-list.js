import React, {Component} from 'react';
import {connect} from 'react-redux';

import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import WithRestoService from "../hoc";
import {menuFailed, menuLoaded, menuRequested} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";


class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {restoService} = this.props;
        restoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuFailed())
    }

    getItemsList = () => {
        const {menuList} = this.props;
        return menuList.map((item) => <MenuListItem key={item.id} menuItem={item}/>);
    }

    render() {
        const {loading, error} = this.props;
        if (loading) return <Spinner/>;
        else if (error) return <Error/>;

        return (
            <ul className="menu__list">
                {this.getItemsList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {menuList: state.menu, loading: state.loading, error: state.error}
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuFailed,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));