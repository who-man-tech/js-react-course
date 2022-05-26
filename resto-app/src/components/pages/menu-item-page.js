import React from 'react';
import {useParams} from "react-router-dom";
import MenuItem from "../menu-item";

const MenuItemPage = () => {
    const { itemId } = useParams();

    return (
        <MenuItem itemId={itemId}/>
    );
}

export default MenuItemPage;
