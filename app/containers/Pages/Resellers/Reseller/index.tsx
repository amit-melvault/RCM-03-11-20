import React, { Component } from 'react';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination';
// import DataTable from '../../../../components/TableList';
import ResellerTable from '../../../Tables/Resellers/ResellerTable';
import { connect } from 'react-redux';
import { AddReseller, deleteReseller, searchReseller, updateReseller } from '../Action';



interface IState {
  tabHeader: any,
  currentPage: number,
  productPerPage: number,
  searchInputValue: any
  isOpenAddModal: boolean,
}
interface IProps {
  heading: string,
  subTitle: string,
  btnName: string,
  resellerData: any,
  AddReseller: any
  deleteReseller: any,
  searchReseller: any
  updateReseller: any

}

const resellersHead = [
  { id: 1, name: "Reseller Name", phone: "Contact Phone", email: "Email" },
]


class Reseller extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      tabHeader: resellersHead,
      currentPage: 1,
      productPerPage: 5,
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

  deleteResellerData = (index) => {
    this.props.deleteReseller(index)
  };

  handleSearchChange = (value, event) => {
    const { resellerData } = this.props;
    this.setState({
      searchInputValue: value
    }, () => {
      this.props.searchReseller(this.state.searchInputValue)
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
    const currentPages = (this.props.resellerData).slice(indexOffistPage, indexOfLastPage)
    return (
      <React.Fragment>
        <Header
          heading="Reseller"
          subTitle="Make changes Reseller/ Resellers group here"
          data={this.props.resellerData}
          searchInputValue={this.state.searchInputValue}
          handleSearchChange={this.handleSearchChange}
        />
        <PaginationTop
          itemCount={this.props.resellerData.length}
          onSetPage={this.onSetPage}
          onPerPageSelect={this.onPerPageSelect}
          page={this.state.currentPage}
          perPage={this.state.productPerPage}
        />
        {/* <DataTable
          data={currentPages}
          head={this.state.tabHeader}
          handleDelete={this.deleteResellerData}
          updateItem={this.props.updateReseller}
        /> */}
        <ResellerTable
          data={currentPages}
          head={this.state.tabHeader}
          isOpenAddModal={this.state.isOpenAddModal}
          handleAddItemModal={this.handleAddItemModal}
          handleModalClose={this.handleModalClose}
          handleDelete={this.deleteResellerData}
          addReseller = {this.props.AddReseller}
          updateResellerData={this.props.updateReseller}
          titleName="Add Resellers"
          btnName="Add Resellers"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resellerData: state.reseller && state.reseller.Item
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddReseller: (data) => dispatch(AddReseller(data)),
    deleteReseller: (index) => dispatch(deleteReseller(index)),
    searchReseller: (value) => dispatch(searchReseller(value)),
    updateReseller: (data) => dispatch(updateReseller(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reseller);