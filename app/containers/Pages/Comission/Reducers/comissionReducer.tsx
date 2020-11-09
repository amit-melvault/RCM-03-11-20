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
        { id: 1, name: 'Product Name', code: "RS001", selectRatingType: "Fixed percentage", CommissionValue: 200, selectProduct: 'any product', resellerGroup: 'reseller Group name', reseller: 'reseller Name', selectbase: 'Gross Amount', amountFrom: 1000, amountTo: 2000, selectCommissionValueType: 'percentage', CommisionSectionValue: 300 },
        { id: 2, name: 'name of a Product', code: "RS002", selectRatingType: "variable percentage", CommissionValue: 200, selectProduct: 'any product', resellerGroup: 'reseller Group name', reseller: 'reseller Name', selectbase: 'Gross Amount', amountFrom: 1000, amountTo: 2000, selectCommissionValueType: 'percentage', CommisionSectionValue: 300 },
        { id: 3, name: 'Product goes here', code: "RS003", selectRatingType: "Fixed percentage", CommissionValue: 200, selectProduct: 'any product', resellerGroup: 'reseller Group name', reseller: 'reseller Name', selectbase: 'Gross Amount', amountFrom: 1000, amountTo: 2000, selectCommissionValueType: 'percentage', CommisionSectionValue: 300 },
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
            Comi.code = data.code;
            Comi.name = data.name;
            Comi.selectRatingType = data.selectRatingType;
            Comi.CommissionValue = data.CommissionValue;
            Comi.selectProduct = data.selectProduct;
            Comi.resellerGroup = data.resellerGroup;
            Comi.reseller = data.reseller;
            Comi.selectbase = data.selectbase;
            Comi.amountFrom = data.amountFrom;
            Comi.amountTo = data.amountTo;
            Comi.selectCommissionValueType = data.selectCommissionValueType;
            Comi.CommisionSectionValue = data.CommisionSectionValue;
        }
    });
    return ComisionItems;
}

export default ComissionReducer;