import {
    GET_RESELLER_GROUP,
    ADD_RESELLER_GROUP,
    EDIT_RESELLER_GROUP,
    DELETE_RESELLER_GROUP,
    SEARCH_RESELLER_GROUP,
    UPDATE_RESELLER_GROUP
} from '../Action/actionType';

const initialState = {
    Item: [
        { id: 1, name: "Reseller zone 1", refNo: "RS001", Reseller: 'item type' },
        { id: 2, name: "Reseller zone 2", refNo: "RS001", Reseller: 'item type' },
        { id: 3, name: "Reseller zone 3", refNo: "RS001", Reseller: 'item type' },
        { id: 4, name: "Reseller zone 4", refNo: "RS001", Reseller: 'item type' },
    ]
}

const originalData = initialState.Item;

const resellerGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESELLER_GROUP:
            const resellerGroupItem = state.Item
            return {
                ...state,
                resellerGroupItem
            }

        case ADD_RESELLER_GROUP:
            const addedResellerGrop = _handleAddResellerGroup(state, action.data);
            return {
                ...state,
                Item: addedResellerGrop
            }

        case EDIT_RESELLER_GROUP:
            return {

            }

        case DELETE_RESELLER_GROUP:
            const delResellerGroupData = _handleDeletedResellerGroup(state, action.id);
            return {
                ...state,
                Item: delResellerGroupData
            }

        case SEARCH_RESELLER_GROUP:
            const filterResellerGroupItem = _handleFilterResellerGroup(state, action.value);
            return {
                ...state,
                Item: filterResellerGroupItem
            }

        case UPDATE_RESELLER_GROUP:
            const updatedResellergroupItem = _handleUpdateResellerGroup(state, action.data);
            return {
                ...state,
                Item: updatedResellergroupItem
            }
        default:
            return state;
    }
}

const _handleAddResellerGroup = (state, data) => {
    const addResellerGrop = [...state.Item]
    addResellerGrop.push(data)
    return addResellerGrop;
}

const _handleDeletedResellerGroup = (state, id) => {
    let delResellerGroupItems = [...state.Item];
    delResellerGroupItems = delResellerGroupItems.filter(item => item.id !== id);
    return delResellerGroupItems;
}

const _handleFilterResellerGroup = (state, value) => {
    let resellergroupItemData = originalData;
    let filterResellerGroupData = resellergroupItemData.filter(item => {
        return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterResellerGroupData;
}
const _handleUpdateResellerGroup = (state, data) => {
    let resellerGroupItems = [...state.Item];
    resellerGroupItems.forEach((reselGroup) => {
        if (reselGroup.id === data.id) {
            reselGroup.name = data.name;
            reselGroup.refNo = data.refNo;
            reselGroup.Reseller = data.reseller;
        }
    });
    return resellerGroupItems;
}

export default resellerGroupReducer;