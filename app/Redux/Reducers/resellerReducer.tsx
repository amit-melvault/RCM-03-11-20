import {
    GET_RESELLER,
    EDIT_RESELLER,
    ADD_RESELLER,
    DELETE_RESELLER,
    SEARCH_RESELLER,
    UPDATE_RESELLER
} from '../Actions/actionType';

const initialState = {
    Item: [
        { id: 1, name: "Some Reseller Name", refNo: "RS001", Reseller: 'item type' },
        { id: 2, name: "Some Name of a Reseller", refNo: "RS002", Reseller: 'item type' },
        { id: 3, name: "Some Reseller Name goes here", refNo: "RS003", Reseller: 'item type' },
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
            resel.refNo = data.refNo;
            resel.Reseller = data.reseller;
        }
    });
    return resellerItems;
}

export default reseller;