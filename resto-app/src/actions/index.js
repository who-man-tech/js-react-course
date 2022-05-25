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

export {menuLoaded, menuRequested};