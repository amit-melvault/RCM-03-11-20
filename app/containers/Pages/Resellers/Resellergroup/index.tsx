import React, { Component } from 'react';
import PaginationTop from '../../../../components/Pagination';
import DataTable from '../../../../components/TableList';
import Header from '../../../../components/Header';
import { connect } from 'react-redux';
import { AddResellerGroup,deleteResellerGroup,searchResellerGroup,updateResellergroup } from '../../../../Redux/Actions/action';

interface IState {
    TableHead: any,
    currentPage: number,
    productPerPage: number,
    searchInputValue: any,
    isOpenAddModal:boolean,
}

interface IProps {
    heading: string,
    subTitle: string,
    btnName: string,
    resellerGroupData: any,
    AddResellerGroup: any
    deleteResellerGroup: any,
    searchResellerGroup: any,
    updateResellergroup: any,
}
const resellerGroupHead = [
    { id: 1, name: "Product" , action:"Action" },
]

class ResellerGroup extends Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            TableHead: resellerGroupHead,
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

    deleteResellerGroup = (index) => {
        this.props.deleteResellerGroup(index)
    };

    handleSearchChange = (value, event) => {
        const { resellerGroupData } = this.props;
        this.setState({
            searchInputValue: value
        }, () => {
            this.props.searchResellerGroup(this.state.searchInputValue)
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
        const currentPages = (this.props.resellerGroupData).slice(indexOffistPage, indexOfLastPage)

        return (
            <React.Fragment>
                <Header
                    heading="Reseller Groups"
                    subTitle="Make changes Reseller/ Reseller Group here"
                    btnName="Add Reseller Group"
                    data={this.props.resellerGroupData}
                    searchInputValue={this.state.searchInputValue}
                    handleSearchChange={this.handleSearchChange}
                    isOpenAddModal={this.state.isOpenAddModal}
                    handleAddItemModal={this.handleAddItemModal}
                    handleModalClose={this.handleModalClose}
                    addItems={this.props.AddResellerGroup}
                />
                <PaginationTop
                    itemCount={this.props.resellerGroupData.length}
                    onSetPage={this.onSetPage}
                    onPerPageSelect={this.onPerPageSelect}
                    page={this.state.currentPage}
                    perPage={this.state.productPerPage}
                />
                <DataTable
                    data={currentPages}
                    head={this.state.TableHead}
                    handleDelete={this.deleteResellerGroup}
                    updateItem={this.props.updateResellergroup}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resellerGroupData: state.resellerGroupReducer && state.resellerGroupReducer.Item
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddResellerGroup: (data) => dispatch(AddResellerGroup(data)),
        deleteResellerGroup: (index) => dispatch(deleteResellerGroup(index)),
        searchResellerGroup: (value) => dispatch(searchResellerGroup(value)),
        updateResellergroup: (data) => dispatch(updateResellergroup(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResellerGroup);