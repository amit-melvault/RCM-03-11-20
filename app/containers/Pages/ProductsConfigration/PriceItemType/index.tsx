import React, { Component } from 'react';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination';
// import DataTable from '../../../../components/TableList';
import { connect } from 'react-redux';
import { AddPriceItem, deletePriceItem, searchPriceItem, updatePriceItem } from '../Action';
import PriceItemTable from '../../../Tables/ProductConfigration/PriceItemTable'


interface IState {
    Header: any,
    currentPage: number,
    productPerPage: number,
    searchInputValue: any
    isOpenAddModal: any
}
interface IProps {
    deleteProduct: any,
    price: any,
    AddPriceItem: any
    deletePriceItem: any
    updatePriceItem: any
    searchPriceItem: any
}
const priceItemHeader = [
    { id: 1, refNo:'Code', name: "Price Item Type", key:"Key" ,action: "Action" },
]

class PriceItemType extends Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            Header: priceItemHeader,
            currentPage: 1,
            productPerPage: 10,
            searchInputValue: '',
            isOpenAddModal: false,
        }
    }

    onSetPage = (event, pageNumbers) => {
        this.setState({ currentPage: pageNumbers })
    }

    onPerPageSelect = (event, perPage) => {
        this.setState({
            productPerPage: perPage
        });
    };

    deletePriceItem = (index) => {
        this.props.deletePriceItem(index)
    };

    handleSearchChange = (value, event) => {
        const { price } = this.props;
        this.setState({
            searchInputValue: value
        }, () => {
            this.props.searchPriceItem(this.state.searchInputValue)
        });
    };

    handleAddItemModal = (e) => {
        e.preventDefault()
        this.setState({
            isOpenAddModal: true,
        })
    }
    handleModalClose = () => {
        this.setState({
            isOpenAddModal: false,
        });
    };

    render() {
        const indexOfLastPage = this.state.currentPage * this.state.productPerPage;
        const indexOffistPage = indexOfLastPage - this.state.productPerPage;
        const currentPages = (this.props.price).slice(indexOffistPage, indexOfLastPage)

        return (
            <React.Fragment>
                <Header
                    heading="Price Item Types"
                    subTitle="Make changes to Price Item Types here"
                    data={this.props.price}
                    searchInputValue={this.state.searchInputValue}
                    handleSearchChange={this.handleSearchChange}
                />
                <PaginationTop
                    itemCount={this.props.price.length}
                    onSetPage={this.onSetPage}
                    onPerPageSelect={this.onPerPageSelect}
                    page={this.state.currentPage}
                    perPage={this.state.productPerPage} />

                {/* <DataTable
                    data={currentPages}
                    head={priceItemHeader}
                    handleDelete={this.deletePriceItem}
                    updateItem={this.props.updatePriceItem}
                /> */}
                
                <PriceItemTable
                    data={currentPages}
                    head={priceItemHeader}
                    handleDelete={this.deletePriceItem}
                    updateItem={this.props.updatePriceItem}
                    handleAddItemModal={this.handleAddItemModal}
                    isOpenAddModal={this.state.isOpenAddModal}
                    handleModalClose={this.handleModalClose}
                    addPriceItems={this.props.AddPriceItem}
                    btnName="Add Price"
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        price: state.priceItem && state.priceItem.Item
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddPriceItem: (data) => dispatch(AddPriceItem(data)),
        deletePriceItem: (index) => dispatch(deletePriceItem(index)),
        searchPriceItem: (value) => dispatch(searchPriceItem(value)),
        updatePriceItem: (data) => dispatch(updatePriceItem(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceItemType);