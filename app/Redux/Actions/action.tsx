import {
    GET_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    SEARCH_PRODUCTS,
    UPDATE_PRODUCT,
    GET_PRICEITEM_TYPE,
    ADD_PRICEITEM_TYPE,
    EDIT_PRICEITEM_TYPE,
    DELETE_PRICEITEM_TYPE,
    SEARCH_PRICEITEM_TYPE,
    UPDATE_PRICEITEM_TYPE,
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
    GET_COMISSION,
    ADD_COMISSION,
    EDIT_COMISSION,
    DELETE_COMISSION,
    SEARCH_COMISSION,
    UPDATE_COMISSION
} from './actionType';



export const getProduct = () => ({
    type: GET_PRODUCT,
})
export const AddProductItem = (data) => ({
    type: ADD_PRODUCT,
    data
})
export const editProduct = () => ({
    type: EDIT_PRODUCT,
})
export const deleteProduct = (data) => ({
    type: DELETE_PRODUCT,
    id: data.id
})
export const searchProducts = (value) => ({
    type: SEARCH_PRODUCTS,
    value
});
export const updateProduct = (data) => ({
    type: UPDATE_PRODUCT,
    data
})

export const getProductPriceItem = () => ({
    type: GET_PRICEITEM_TYPE,
})
export const AddPriceItem = (data) => ({
    type: ADD_PRICEITEM_TYPE,
    data
})
export const editProductPriceItem = () => ({
    type: EDIT_PRICEITEM_TYPE,
})
export const deletePriceItem = (data) => ({
    type: DELETE_PRICEITEM_TYPE,
    id: data.id
})
export const searchPriceItem = (value) => ({
    type: SEARCH_PRICEITEM_TYPE,
    value
})
export const updatePriceItem = (data) => ({
    type: UPDATE_PRICEITEM_TYPE,
    data
})

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

export const getComission = () => ({
    type: GET_COMISSION,
})
export const AddComission = (data) => ({
    type: ADD_COMISSION,
    data
})
export const editComission = () => ({
    type: EDIT_COMISSION,
})
export const deleteComission = (data) => ({
    type: DELETE_COMISSION,
    id: data.id
})
export const searchComission = (value) => ({
    type: SEARCH_COMISSION,
    value
})
export const updateComission = (data) => ({
    type: UPDATE_COMISSION,
    data
})

