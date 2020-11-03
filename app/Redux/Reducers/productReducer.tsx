import {
    GET_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    SEARCH_PRODUCTS,
    UPDATE_PRODUCT
} from '../Actions/actionType';

const initialState = {
    Item: [
        { id: 1, name: 'product1', refNo: 'RS001', Reseller: 'item type' },
        { id: 2, name: 'product2', refNo: 'RS001', Reseller: 'item type' },
        { id: 3, name: 'product3', refNo: 'RS001', Reseller: 'item type' },
        { id: 4, name: 'product4', refNo: 'RS001', Reseller: 'item type' },
        { id: 5, name: 'product5', refNo: 'RS001', Reseller: 'item type' },
        { id: 6, name: 'product6', refNo: 'RS001', Reseller: 'item type' },
        { id: 7, name: 'product7', refNo: 'RS001', Reseller: 'item type' },
        { id: 8, name: 'product8', refNo: 'RS001', Reseller: 'item type' },
        { id: 9, name: 'product9', refNo: 'RS001', Reseller: 'item type' },
        { id: 10, name: 'product10', refNo: 'RS001', Reseller: 'item type' },
        { id: 11, name: 'product11', refNo: 'RS001', Reseller: 'item type' },
        { id: 12, name: 'product12', refNo: 'RS001', Reseller: 'item type' },
        { id: 13, name: 'product13', refNo: 'RS001', Reseller: 'item type' },
        { id: 14, name: 'product15', refNo: 'RS001', Reseller: 'item type' },
    ]
}

const originalData = initialState.Item;

const product = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            const products = state.Item
            return {
                ...state,
                products
            }

        case ADD_PRODUCT:
            const added = _handleAddProduct(state, action.data);
            return {
                ...state,
                Item: added
            }

        case EDIT_PRODUCT:
            return {

            }

        case DELETE_PRODUCT:
            const delProData = _handleDeletedProduct(state, action.id);
            return {
                ...state,
                Item: delProData
            }

        case SEARCH_PRODUCTS:
            const filterProducts = _handleFilterProducts(state, action.value);
            return {
                ...state,
                Item: filterProducts
            }

        case UPDATE_PRODUCT:
            const updatedProducts = _handleUpdateProduct(state, action.data);
            return {
                ...state,
                Item: updatedProducts
            }
        default:
            return state;
    }
}

const _handleAddProduct = (state, data) => {
    const addData = [...state.Item]
    addData.push(data)
    return addData;
}

const _handleDeletedProduct = (state, id) => {
    let delProducts = [...state.Item];
    delProducts = delProducts.filter(item => item.id !== id);
    return delProducts;

}

const _handleFilterProducts = (state, value) => {
    let products = originalData;
    let filterData = products.filter(item => {
        return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterData;
}

const _handleUpdateProduct = (state, data) => {
    let products = [...state.Item];
    products.forEach((product) => {
        if (product.id === data.id) {
            product.name = data.name;
            product.refNo = data.refNo;
            product.Reseller = data.reseller;
        }
    });
    return products;
}
export default product;