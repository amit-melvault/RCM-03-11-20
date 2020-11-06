import {
    GET_EARNED_COMMISION,
    EDIT_EARNED_COMMISION,
    ADD_EARNED_COMMISION,
    DELETE_EARNED_COMMISION,
    SEARCH_EARNED_COMMISION,
    UPDATE_EARNED_COMMISION,
} from '../Action/actionType';

const initialState = {
    Item: [
        { id: 1, commission: "commison", transectionItem: "RS0001", commissionAmount: "10.0000 USD", currency:"USD" },
        { id: 2, commission: "some ", transectionItem: "RS0001", commissionAmount: "10.0000 USD", currency:"ISD" },
        { id: 3, commission: "Reseller name", transectionItem: "RS0001", commissionAmount: "10.0000 USD", currency:"EURO" },
    ]
}

const originalData = initialState.Item;

const earnComission = (state = initialState, action) => {
    switch (action.type) {
        case GET_EARNED_COMMISION:
            const earnsComm = state.Item
            return {
                ...state,
                earnsComm
            }

        case EDIT_EARNED_COMMISION:
            return {

            }

        case ADD_EARNED_COMMISION:
            const addedEarnedComi = _handleAddEarnedComission(state, action.data);
            return {
                ...state,
                Item: addedEarnedComi
            }

        case DELETE_EARNED_COMMISION:
            const delcommi = _handleDeletedComission(state, action.id);
            return {
                ...state,
                Item: delcommi
            }

        case SEARCH_EARNED_COMMISION:
            const filterCommi = _handleFilterComission(state, action.value);
            return {
                ...state,
                Item: filterCommi
            }

        case UPDATE_EARNED_COMMISION:
            const updatedCommi = _handleUpdateComission(state, action.data);
            return {
                ...state,
                Item: updatedCommi
            }

        default:
            return state;
    }
}

const _handleAddEarnedComission = (state, data) => {
    const addEarnedComiData = [...state.Item]
    addEarnedComiData.push(data)
    return addEarnedComiData;
}

const _handleDeletedComission = (state, id) => {
    let delComision = [...state.Item];
    delComision = delComision.filter(item => item.id !== id);
    return delComision;
}

const _handleFilterComission = (state, value) => {
    let CommisionData = originalData;
    let filterComisionData = CommisionData.filter(item => {
        return item.commission.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterComisionData;
}

const _handleUpdateComission = (state, data) => {
    console.log(data)
    let CommiItems = [...state.Item];
    CommiItems.forEach((commision) => {
        if (commision.id === data.id) {
            commision.commission = data.commission;
            commision.transectionItem = data.transectionItem;
            commision.commissionAmount = data.commissionAmount;
            commision.currency = data.currency;
        }
    });
    return CommiItems;
}

export default earnComission;