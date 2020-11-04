import React, { Component } from 'react';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination';
import DataTable from '../../../../components/TableList';
import { connect } from 'react-redux'
import { AddEarnedCommi,deleteEarnedCommi, searchEarnedCommi, updateEarnedCommi } from '../Action';

interface IState {
    EarnedComHead: any,
    currentPage: number,
    productPerPage: number,
    searchInputValue: any,
    isOpenAddModal:boolean,
}
interface IProps {
    heading: any,
    subTitle: any,
    btnName: any,
    earnComi: any,
    AddEarnedCommi: any
    deleteEarnedCommi: any,
    searchEarnedCommi: any
    updateEarnedCommi: any
}
const earnedComissionHead = [
    { id: 1, name: "Reseller Name", refNo: "Transection ", Reseller: "Comission Amount", action:"Action" },
]

class EarnedComission extends Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            EarnedComHead: earnedComissionHead,
            currentPage: 1,
            productPerPage: 5,
            searchInputValue: '',
            isOpenAddModal:false,
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

    deleteComission = (index) => {
        this.props.deleteEarnedCommi(index)
    };

    handleSearchChange = (value, event) => {
        const { earnComi } = this.props;
        this.setState({
            searchInputValue: value
        }, () => {
            this.props.searchEarnedCommi(this.state.searchInputValue)
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
        const currentPages = (this.props.earnComi).slice(indexOffistPage, indexOfLastPage)
        return (
            <React.Fragment>
                <Header
                    heading="Earned Commissions"
                    subTitle="Make Changes to Earned Commissions/ Sales Transection here"
                    btnName="Add Comission"
                    data={this.props.earnComi}
                    searchInputValue={this.state.searchInputValue}
                    handleSearchChange={this.handleSearchChange}
                    isOpenAddModal={this.state.isOpenAddModal}
                    handleAddItemModal={this.handleAddItemModal}
                    handleModalClose={this.handleModalClose}
                    addItems={this.props.AddEarnedCommi}
                />
                <PaginationTop
                    itemCount={this.props.earnComi.length}
                    onSetPage={this.onSetPage}
                    onPerPageSelect={this.onPerPageSelect}
                    page={this.state.currentPage}
                    perPage={this.state.productPerPage}
                />
                <DataTable
                    data={currentPages}
                    head={this.state.EarnedComHead}
                    handleDelete={this.deleteComission}
                    updateItem={this.props.updateEarnedCommi}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        earnComi: state.earnComission && state.earnComission.Item
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddEarnedCommi: (data) => dispatch(AddEarnedCommi(data)),
        deleteEarnedCommi: (index) => dispatch(deleteEarnedCommi(index)),
        searchEarnedCommi: (value) => dispatch(searchEarnedCommi(value)),
        updateEarnedCommi: (data) => dispatch(updateEarnedCommi(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EarnedComission);