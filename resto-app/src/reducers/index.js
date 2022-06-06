const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
};

const reducer = (state = initialState, action) => {
    // Перечисляем действия, которые должен будет обрабатывать redux и что делать с данными,
    // которые пришли при вызове
    switch (action.type) {
        case 'MENU_LOADED':
            return {...state, menu: action.payload, loading: false, error: false};
        case 'MENU_REQUESTED':
            return {...state, menu: state.menu, loading: true, error: false};
        case 'MENU_FAILED':
            return {...state, menu: state.menu, loading: false, error: true};
        case 'ITEM_ADD_TO_CART':
            let id = action.payload,
                existCartItemIndex = state.items.findIndex(item => item.id === id)
            if (existCartItemIndex > -1) {
                let items = [...state.items],
                    item = {...items.splice(existCartItemIndex, 1)[0]};
                item.count++;
                return {...state, items: [...items, item]};
            }
            const item = state.menu.find(item => item.id === id),
                newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    count: 1
                };
            return {...state, items: [...state.items, newItem]};
        case 'ITEM_DELETE_FROM_CART':
            const ind = action.payload,
                items = state.items.filter(item => item.id !== ind)
            return {...state, items: items};
        default:
            return state;
    }
};

export default reducer;