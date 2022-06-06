// Указываем действия, которые будем использовать для работы с redux
// Только ради уменьшения количества кода, чтобы каждый раз не передавать объект

const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {type: 'MENU_REQUESTED'};
};

const menuFailed = () => {
    return {type: 'MENU_FAILED'};
};

const addToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_DELETE_FROM_CART',
        payload: id
    }
}

export {menuLoaded, menuRequested, menuFailed, addToCart, deleteFromCart};