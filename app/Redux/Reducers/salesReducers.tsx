import {
    GET_SALES_TRANS,
    EDIT_SALES_TRANS,
    ADD_SALES_TRANS,
    DELETE_SALES_TRANS,
    SEARCH_SALES_TRANS,
    UPDATE_SALES_TRANS,
} from '../Actions/actionType';

const initialState = {
    Item: [
        { id: 1, name: "sales product trans", refNo: "RS0001", Reseller: "Reseller1(RS0001)" },
        { id: 2, name: "some name ", refNo: "RS0002", Reseller: "Reseller2(RS0002)" },
        { id: 3, name: "some product name goes here", refNo: "RS0003", Reseller: "Reseller3(RS0003)" },
        { id: 4, name: "product name", refNo: "RS0001", Reseller: "Reseller1(RS0001)" },
        { id: 5, name: "some name of sales ", refNo: "RS0002", Reseller: "Reseller2(RS0002)" },
        { id: 6, name: "some sales transection", refNo: "RS0003", Reseller: "Reseller3(RS0003)" },
        { id: 7, name: "some product name", refNo: "RS0001", Reseller: "Reseller1(RS0001)" },
        { id: 8, name: "some sale of a product ", refNo: "RS0002", Reseller: "Reseller2(RS0002)" },
        { id: 9, name: "some product salse", refNo: "RS0003", Reseller: "Reseller3(RS0003)" },
        { id: 10, name: "some tansection name", refNo: "RS0001", Reseller: "Reseller1(RS0001)" },

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
        return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return filterSalesTransData;
}
const _handleUpdateSalesTrans = (state, data) => {
    let SalesTransItems = [...state.Item];
    SalesTransItems.forEach((salesTrn) => {
        if (salesTrn.id === data.id) {
            salesTrn.name = data.name;
            salesTrn.refNo = data.refNo;
            salesTrn.Reseller = data.reseller;
        }
    });
    return SalesTransItems;
}

export default SalesTrans;