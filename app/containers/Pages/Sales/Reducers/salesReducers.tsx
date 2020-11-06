import {
    GET_SALES_TRANS,
    EDIT_SALES_TRANS,
    ADD_SALES_TRANS,
    DELETE_SALES_TRANS,
    SEARCH_SALES_TRANS,
    UPDATE_SALES_TRANS,
} from '../Action/actionType';

const initialState = {
    Item: [
        { id: 1, productName: "sales product trans", refNo: "RS0001", reseller: "reseller1(RS0001)",salesAmount:"5000USD" },
        { id: 2, productName: "some productName ", refNo: "RS0002", reseller: "reseller2(RS0002)",salesAmount:"5000USD" },
        { id: 3, productName: "some product productName goes here", refNo: "RS0003", reseller: "reseller3(RS0003)",salesAmount:"5000USD" },
        { id: 4, productName: "product productName", refNo: "RS0001", reseller: "reseller1(RS0001)",salesAmount:"5000USD" },
        { id: 5, productName: "some productName of sales ", refNo: "RS0002", reseller: "reseller2(RS0002)",salesAmount:"5000USD" },
        { id: 6, productName: "some sales transection", refNo: "RS0003", reseller: "reseller3(RS0003)",salesAmount:"5000USD" },
        { id: 7, productName: "some product productName", refNo: "RS0001", reseller: "reseller1(RS0001)",salesAmount:"5000USD" },
        { id: 8, productName: "some sale of a product ", refNo: "RS0002", reseller: "reseller2(RS0002)",salesAmount:"5000USD" },
        { id: 9, productName: "some product salse", refNo: "RS0003", reseller: "reseller3(RS0003)",salesAmount:"5000USD" },
        { id: 10, productName: "some tansection name", refNo: "RS0001", reseller: "reseller1(RS0001)",salesAmount:"5000USD" },

    ]
}

const originalData = initialState.Item;

const SalesTrans = (state = initialState, action) => {

    switch (action.type) {
        case GET_SALES_TRANS:
            const salesTransection = state.Item
            return {
                ...state,
                salesTransection
            }

        case ADD_SALES_TRANS:
            const addedSalesTrans = _handleAddSalesTrans(state, action.data);
            return {
                ...state,
                Item: addedSalesTrans
            }

        case EDIT_SALES_TRANS:
            return {

            }

        case DELETE_SALES_TRANS:
            const delSales = _handleDeletedSalesTrans(state, action.id);
            return {
                ...state,
                Item: delSales
            }

        case SEARCH_SALES_TRANS:
            const filterSalesTrans = _handleFilterSalesTrans(state, action.value);
            return {
                ...state,
                Item: filterSalesTrans
            }

        case UPDATE_SALES_TRANS:
            const updatedSalesTrans = _handleUpdateSalesTrans(state, action.data);
            return {
                ...state,
                Item: updatedSalesTrans
            }

        default:
            return state;
    }
}

const _handleAddSalesTrans = (state, data) => {
    const addSalesTransData = [...state.Item]
    addSalesTransData.push(data)
    return addSalesTransData;
}


const _handleDeletedSalesTrans = (state, id) => {
    let delsales = [...state.Item];
    delsales = delsales.filter(item => item.id !== id);
    return delsales;
}

const _handleFilterSalesTrans = (state, value) => {
    let SalesTransData = originalData;
    let filterSalesTransData = SalesTransData.filter(item => {
        return item.productName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterSalesTransData;
}
const _handleUpdateSalesTrans = (state, data) => {
    let SalesTransItems = [...state.Item];
    SalesTransItems.forEach((salesTrn) => {
        if (salesTrn.id === data.id) {
            salesTrn.productName = data.productName;
            salesTrn.refNo = data.refNo;
            salesTrn.reseller = data.reseller;
            salesTrn.salesAmount = data.salesAmount
        }
    });
    return SalesTransItems;
}

export default SalesTrans;