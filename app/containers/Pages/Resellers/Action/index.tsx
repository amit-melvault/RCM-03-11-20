import {
    GET_RESELLER,
    ADD_RESELLER,
    EDIT_RESELLER,
    DELETE_RESELLER,
    SEARCH_RESELLER,
    UPDATE_RESELLER,
    GET_RESELLER_GROUP,
    ADD_RESELLER_GROUP,
    EDIT_RESELLER_GROUP,
    DELETE_RESELLER_GROUP,
    SEARCH_RESELLER_GROUP,
    UPDATE_RESELLER_GROUP,
} from '../Action/actionType'


export const getReseller = () => ({
    type: GET_RESELLER,
})
export const AddReseller = (data) => ({
    type: ADD_RESELLER,
    data
})
export const editReseller = () => ({
    type: EDIT_RESELLER,
})
export const deleteReseller = (data) => ({
    type: DELETE_RESELLER,
    id: data.id
})
export const searchReseller = (value) => ({
    type: SEARCH_RESELLER,
    value
})
export const updateReseller = (data) => ({
    type: UPDATE_RESELLER,
    data
})

export const getResellerGroup = () => ({
    type: GET_RESELLER_GROUP,
})
export const AddResellerGroup = (data) => ({
    type: ADD_RESELLER_GROUP,
    data
})
export const editResellerGroup = () => ({
    type: EDIT_RESELLER_GROUP,
})
export const deleteResellerGroup = (data) => ({
    type: DELETE_RESELLER_GROUP,
    id: data.id
})
export const searchResellerGroup = (value) => ({
    type: SEARCH_RESELLER_GROUP,
    value
})
export const updateResellergroup = (data) => ({
    type: UPDATE_RESELLER_GROUP,
    data
})