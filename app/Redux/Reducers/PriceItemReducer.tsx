import {
    GET_PRICEITEM_TYPE,
    ADD_PRICEITEM_TYPE,
    EDIT_PRICEITEM_TYPE,
    DELETE_PRICEITEM_TYPE,
    SEARCH_PRICEITEM_TYPE,
    UPDATE_PRICEITEM_TYPE,
} from '../Actions/actionType';

const initialState = {
    Item: [
        { id: 1, name: "Net Price", refNo: 'RS001', Reseller: 'item type' },
        { id: 2, name: "Gross Amount", refNo: 'RS001', Reseller: 'item type' },
        { id: 3, name: "Net Amount", refNo: 'RS001', Reseller: 'item type' },
    ]
}

const originalData = initialState.Item;

const priceItem = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRICEITEM_TYPE:
            const priceItemdata = state.Item
            return {
                ...state,
                priceItemdata
            }

        case ADD_PRICEITEM_TYPE:
            const addedPrice = _handleAddPriceItem(state, action.data);
            return {
                ...state,
                Item: addedPrice
            }

        case EDIT_PRICEITEM_TYPE:
            return {

            }

        case DELETE_PRICEITEM_TYPE:
            const delPriceData = _handleDeletedPriceItemData(state, action.id);
            return {
                ...state,
                Item: delPriceData
            }

        case SEARCH_PRICEITEM_TYPE:
            const filterPriceItem = _handleFilterPriceItem(state, action.value);
            return {
                ...state,
                Item: filterPriceItem
            }

        case UPDATE_PRICEITEM_TYPE:
            const updatedPriceItem = _handleUpdatePriceItem(state, action.data);
            return {
                ...state,
                Item: updatedPriceItem
            }
        default:
            return state;
    }
}

const _handleAddPriceItem = (state, data) => {
    const addpriceData = [...state.Item]
    addpriceData.push(data)
    return addpriceData;
}

const _handleDeletedPriceItemData = (state, id) => {
    let delPriceItems = [...state.Item];
    delPriceItems = delPriceItems.filter(item => item.id !== id);
    return delPriceItems;
}

const _handleFilterPriceItem = (state, value) => {
    let priceItemData = originalData;
    let filterpriceData = priceItemData.filter(item => {
        return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterpriceData;
}
const _handleUpdatePriceItem = (state, data) => {
    let priceItems = [...state.Item];
    priceItems.forEach((price) => {
        if (price.id === data.id) {
            price.name = data.name;
            price.refNo = data.refNo;
            price.Reseller = data.reseller;
        }
    });
    return priceItems;
}
export default priceItem;