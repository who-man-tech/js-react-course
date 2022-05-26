const initialState = {
    menu: [],
    loading: true,
    error: false
};

const reducer = (state = initialState, action) => {
    // Перечисляем действия, которые должен будет обрабатывать redux и что делать с данными,
    // которые пришли при вызове
    switch (action.type) {
        case 'MENU_LOADED':
            return {menu: action.payload, loading: false, error: false};
        case 'MENU_REQUESTED':
            return {menu: state.menu, loading: true, error: false};
        case 'MENU_FAILED':
            return {menu: state.menu, loading: false, error: true};
        default:
            return state;
    }
};

export default reducer;