import {
    GET_COMISSION,
    ADD_COMISSION,
    EDIT_COMISSION,
    DELETE_COMISSION,
    SEARCH_COMISSION,
    UPDATE_COMISSION
} from '../Action/actionType';

const initialState = {
    Item: [
        { id: 1, name: 'Some Product Name', refNo: "RS001", Reseller: "Fixed percentage" },
        { id: 2, name: 'Some name of a Product', refNo: "RS002", Reseller: "variable percentage" },
        { id: 3, name: 'Some Product Name goes here', refNo: "RS003", Reseller: "Fixed percentage" },
    ]
}
const originalData = initialState.Item;

const ComissionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMISSION:
            const Comision = state.Item
            return {
                ...state,
                Comision
            }

        case ADD_COMISSION:
            const addedComi = _handleAddComissionItem(state, action.data);
            return {
                ...state,
                Item: addedComi
            }

        case EDIT_COMISSION:
            return {

            }

        case DELETE_COMISSION:
            const delComisionData = _handleDeletedComission(state, action.id);
            return {
                ...state,
                Item: delComisionData
            }

        case SEARCH_COMISSION:
            const filterCommision = _handleFilterComission(state, action.value);
            return {
                ...state,
                Item: filterCommision
            }

        case UPDATE_COMISSION:
            const updatedComi = _handleUpdateComission(state, action.data);
            return {
                ...state,
                Item: updatedComi
            }

        default:
            return state;
    }
}

const _handleAddComissionItem = (state, data) => {
    const addComiData = [...state.Item]
    addComiData.push(data)
    return addComiData;
}

const _handleDeletedComission = (state, id) => {
    let delComi = [...state.Item];
    delComi = delComi.filter(item => item.id !== id);
    return delComi;
}

const _handleFilterComission = (state, value) => {
    let CommisionItem = originalData;
    let filterComision = CommisionItem.filter(item => {
        return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterComision;
}
const _handleUpdateComission = (state, data) => {
    let ComisionItems = [...state.Item];
    ComisionItems.forEach((Comi) => {
        if (Comi.id === data.id) {
            Comi.name = data.name;
            Comi.refNo = data.refNo;
            Comi.Reseller = data.reseller;
        }
    });
    return ComisionItems;
}

export default ComissionReducer;