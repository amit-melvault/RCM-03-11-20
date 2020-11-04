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
} from '../Action/actionType'


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