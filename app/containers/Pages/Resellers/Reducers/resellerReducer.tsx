import {
    GET_RESELLER,
    EDIT_RESELLER,
    ADD_RESELLER,
    DELETE_RESELLER,
    SEARCH_RESELLER,
    UPDATE_RESELLER
} from '../Action/actionType';

const initialState = {
    Item: [
        { id: 1, name: "Sham", phone: "123456789", email: 'ram@text.com' },
        { id: 2, name: "ram", phone: "987654321", email: 'sham@gmail.com' },
        { id: 3, name: "Mohan", phone: "234176893", email: 'text@text.com' },
    ]
}
const originalData = initialState.Item;

const reseller = (state = initialState, action) => {

    switch (action.type) {
        case GET_RESELLER:
            const resellerItem = state.Item
            return {
                ...state,
                resellerItem
            }

        case ADD_RESELLER:
            const addedReseller = _handleAddReseller(state, action.data);
            return {
                ...state,
                Item: addedReseller
            }

        case EDIT_RESELLER:
            return {

            }

        case DELETE_RESELLER:
            const delResellerData = _handleDeletedReseller(state, action.id);
            return {
                ...state,
                Item: delResellerData
            }
        case SEARCH_RESELLER:
            const filterResellerItem = _handleFilterReseller(state, action.value);
            return {
                ...state,
                Item: filterResellerItem
            }

        case UPDATE_RESELLER:
            const updatedResellerItem = _handleUpdateReseller(state, action.data);
            return {
                ...state,
                Item: updatedResellerItem
            }
        default:
            return state;
    }
}

const _handleAddReseller = (state, data) => {
    const addReseller = [...state.Item]
    addReseller.push(data)
    return addReseller;
}

const _handleDeletedReseller = (state, id) => {
    let delResellerItems = [...state.Item];
    delResellerItems = delResellerItems.filter(item => item.id !== id);
    return delResellerItems;
}

const _handleFilterReseller = (state, value) => {
    let resellerItemData = originalData;
    let filterResellerData = resellerItemData.filter(item => {
        return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterResellerData;
}
const _handleUpdateReseller = (state, data) => {
    let resellerItems = [...state.Item];
    resellerItems.forEach((resel) => {
        if (resel.id === data.id) {
            resel.name = data.name;
            resel.phone = data.phone;
            resel.email = data.email;
        }
    });
    return resellerItems;
}

export default reseller;