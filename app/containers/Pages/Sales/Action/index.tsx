import {
    GET_EARNED_COMMISION,
    ADD_EARNED_COMMISION,
    EDIT_EARNED_COMMISION,
    DELETE_EARNED_COMMISION,
    SEARCH_EARNED_COMMISION,
    UPDATE_EARNED_COMMISION,
    GET_SALES_TRANS,
    ADD_SALES_TRANS,
    EDIT_SALES_TRANS,
    DELETE_SALES_TRANS,
    SEARCH_SALES_TRANS,
    UPDATE_SALES_TRANS,
} from '../Action/actionType'


export const getEarnedCommi = () => ({
    type: GET_EARNED_COMMISION,
})
export const AddEarnedCommi = (data) => ({
    type: ADD_EARNED_COMMISION,
    data
})
export const editEarnedCommi = () => ({
    type: EDIT_EARNED_COMMISION,
})
export const deleteEarnedCommi = (data) => ({
    type: DELETE_EARNED_COMMISION,
    id: data.id
})
export const searchEarnedCommi = (value) => ({
    type: SEARCH_EARNED_COMMISION,
    value
})
export const updateEarnedCommi = (data) => ({
    type: UPDATE_EARNED_COMMISION,
    data
})

export const getSalesTrans = () => ({
    type: GET_SALES_TRANS,
})
export const AddSalesTrans = (data) => ({
    type: ADD_SALES_TRANS,
    data
})
export const editSalesTrans = () => ({
    type: EDIT_SALES_TRANS,
})
export const deleteSalesTrans = (data) => ({
    type: DELETE_SALES_TRANS,
    id: data.id
})
export const searchSalesTrans = (value) => ({
    type: SEARCH_SALES_TRANS,
    value
})
export const updateSalesTrans = (data) => ({
    type: UPDATE_SALES_TRANS,
    data
})
