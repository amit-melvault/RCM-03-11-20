import React, { Component } from 'react';
import Header from '../../../components/Header';
import PaginationTop from '../../../components/Pagination';
import DataTable from '../../../components/TableList';
import { connect } from 'react-redux';
import { AddComission,deleteComission, searchComission, updateComission } from '../../../Redux/Actions/action';


const comissionHead = [
  { id: 1, name: 'Product Name', refNo: "Code", Reseller: "Rating Type", action:"Action"  },
]

interface IState {
  ComissionHead: any,
  currentPage: number,
  productPerPage: number,
  searchInputValue: any
  isOpenAddModal: any
}
interface IProps {
  ComisionData: any,
  AddComission: any
  deleteComission: any,
  searchComission: any,
  updateComission: any
}

class Comission extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      ComissionHead: comissionHead,
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

  deleteComissionData = (index) => {
    this.props.deleteComission(index)
  };

  handleSearchChange = (value, event) => {
    const { ComisionData } = this.props;
    this.setState({
      searchInputValue: value
    }, () => {
      this.props.searchComission(this.state.searchInputValue)
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
    const currentPages = (this.props.ComisionData).slice(indexOffistPage, indexOfLastPage)
    return (
      <React.Fragment>
        <Header
          heading="Comissions"
          subTitle="Make changes to Comissions here"
          btnName="Add Comissions"
          data={this.props.ComisionData}
          searchInputValue={this.state.searchInputValue}
          handleSearchChange={this.handleSearchChange}
          isOpenAddModal={this.state.isOpenAddModal}
          handleAddItemModal={this.handleAddItemModal}
          handleModalClose={this.handleModalClose}
          addItems={this.props.AddComission}
        />
        <PaginationTop
          itemCount={this.props.ComisionData.length}
          onSetPage={this.onSetPage}
          onPerPageSelect={this.onPerPageSelect}
          page={this.state.currentPage}
          perPage={this.state.productPerPage}
        />
        <DataTable
          data={currentPages}
          head={this.state.ComissionHead}
          handleDelete={this.deleteComissionData}
          updateItem={this.props.updateComission}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ComisionData: state.ComissionReducer && state.ComissionReducer.Item
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddComission: (data) => dispatch(AddComission(data)),
    deleteComission: (index) => dispatch(deleteComission(index)),
    searchComission: (value) => dispatch(searchComission(value)),
    updateComission: (data) => dispatch(updateComission(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comission);
