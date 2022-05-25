const initialState = {
    menu: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    // Перечисляем действия, которые должен будет обрабатывать redux и что делать с данными,
    // которые пришли при вызове действия
    switch (action.type) {
        case 'MENU_LOADED':
            return {menu: action.payload, loading: false};
        case 'MENU_REQUESTED':
            return {menu: state.menu, loading: true };
        default:
            return state;
    }
};

export default reducer;