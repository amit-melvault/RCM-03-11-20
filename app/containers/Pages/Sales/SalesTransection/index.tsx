import React, { Component } from 'react'
import PaginationTop from '../../../../components/Pagination'
import DataTable from '../../../../components/TableList'
import Header from '../../../../components/Header'
import { connect } from 'react-redux'
import { AddSalesTrans,deleteSalesTrans, searchSalesTrans, updateSalesTrans } from '../../../../Redux/Actions/action';


interface IState {
    tableHead: any,
    currentPage: number,
    salesTranPerPage: number,
    searchInputValue: any,
    isOpenAddModal:boolean,
}
interface IProps {
    heading: any,
    subTitle: any,
    btnName: any,
    SalesTrans: any,
    AddSalesTrans: any
    deleteSalesTrans: any,
    searchSalesTrans: any,
    updateSalesTrans: any,
}
const salesHead = [
    { id: 1, name: "Product", refNo: "Reference Number", Reseller: "Reseller", action:"Action"  },
]

class Sales extends Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            tableHead: salesHead,
            currentPage: 1,
            salesTranPerPage: 5,
            searchInputValue: '',
            isOpenAddModal:false,
        }
    }

    onSetPage = (event, pageNumbers) => {
        this.setState({ currentPage: pageNumbers })
    }

    onPerPageSelect = (event, perPage) => {
        this.setState({
            salesTranPerPage: perPage
        });
    };

    deleteSalesTrans = (index) => {
        this.props.deleteSalesTrans(index)
    };

    handleSearchChange = (value, event) => {
        const { SalesTrans } = this.props;
        this.setState({
            searchInputValue: value
        }, () => {
            this.props.searchSalesTrans(this.state.searchInputValue)
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
        const indexOfLastPage = this.state.currentPage * this.state.salesTranPerPage;
        const indexOffistPage = indexOfLastPage - this.state.salesTranPerPage;
        const currentPages = (this.props.SalesTrans).slice(indexOffistPage, indexOfLastPage)
        return (
            <React.Fragment>
                <Header
                    heading="Sales Transactions"
                    subTitle="Make Changes to Sales Transactions here"
                    btnName="Add Sales"
                    data={this.props.SalesTrans}
                    searchInputValue={this.state.searchInputValue}
                    handleSearchChange={this.handleSearchChange}
                    isOpenAddModal={this.state.isOpenAddModal}
                    handleAddItemModal={this.handleAddItemModal}
                    handleModalClose={this.handleModalClose}
                    addItems={this.props.AddSalesTrans}
                />
                <PaginationTop
                    itemCount={this.props.SalesTrans.length}
                    onSetPage={this.onSetPage}
                    onPerPageSelect={this.onPerPageSelect}
                    page={this.state.currentPage}
                    perPage={this.state.salesTranPerPage}
                />
                <DataTable
                    data={currentPages}
                    head={this.state.tableHead}
                    handleDelete={this.deleteSalesTrans}
                    updateItem={this.props.updateSalesTrans}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SalesTrans: state.SalesTrans && state.SalesTrans.Item
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddSalesTrans: (data) => dispatch(AddSalesTrans(data)),
        deleteSalesTrans: (index) => dispatch(deleteSalesTrans(index)),
        searchSalesTrans: (value) => dispatch(searchSalesTrans(value)),
        updateSalesTrans: (data) => dispatch(updateSalesTrans(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales);