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
        { id: 1, name: "some Reseller name", refNo: "RS0001", Reseller: "10.0000 USD" },
        { id: 2, name: "some name of a Reseller ", refNo: "RS0002", Reseller: "20.0000 USD" },
        { id: 3, name: "some Reseller name goes here", refNo: "RS0003", Reseller: "30.0000 USD" },
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
        return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterComisionData;
}

const _handleUpdateComission = (state, data) => {
    let CommiItems = [...state.Item];
    CommiItems.forEach((commision) => {
        if (commision.id === data.id) {
            commision.name = data.name;
            commision.refNo = data.refNo;
            commision.Reseller = data.reseller;
        }
    });
    return CommiItems;
}

export default earnComission;