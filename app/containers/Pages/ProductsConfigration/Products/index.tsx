import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import NotFoundPage from '../../../NotFoundPage/Loadable';
import GlobalStyle from '../../../../global-styles';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination'
import DataTable from '../../../../components/TableList'
import { connect } from 'react-redux'
import { AddProductItem, deleteProduct, searchProducts, updateProduct } from '../Action'
import ProductTable from '../../../Tables/ProductConfigration/ProductTable';


const productHead = [
  { id: 1, name: 'Product', action: "Action" },
]

interface IState {
  tableHead: any,
  currentPage: number,
  productPerPage: number
  searchInputValue: any
  isOpenAddModal: boolean
}
interface IProps {
  productdata: any,
  product: any,
  getProduct: any,
  AddProductItem: any,
  deleteProduct: any,
  searchProducts: any
  updateProduct: any
}


class Products extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      tableHead: productHead,
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

  deleteProduct = (index) => {
    this.props.deleteProduct(index)
  };

  handleSearchChange = (value, event) => {
    const { product } = this.props;
    this.setState({
      searchInputValue: value
    }, () => {
      this.props.searchProducts(this.state.searchInputValue)
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
    const currentPages = (this.props.product).slice(indexOffistPage, indexOfLastPage)
    return (
      <div>
        <Header
          heading="Products"
          subTitle="Make changes to Product here"
          btnName="Add Product"
          data={this.props.product}
          searchInputValue={this.state.searchInputValue}
          handleSearchChange={this.handleSearchChange}
          isOpenAddModal={this.state.isOpenAddModal}
          handleAddItemModal={this.handleAddItemModal}
          handleModalClose={this.handleModalClose}
        />
        <PaginationTop
          itemCount={this.props.product.length}
          onSetPage={this.onSetPage}
          onPerPageSelect={this.onPerPageSelect}
          page={this.state.currentPage}
          perPage={this.state.productPerPage}
        />
        {/* <DataTable
          data={currentPages}
          head={this.state.tableHead}
          handleDelete={this.deleteProduct}
          updateItem={this.props.updateProduct}
        /> */}
        <ProductTable
          data={currentPages}
          head={this.state.tableHead}
          handleDelete={this.deleteProduct}
          updateItem={this.props.updateProduct}
          handleAddItemModal={this.handleAddItemModal}
          isOpenAddModal={this.state.isOpenAddModal}
          handleModalClose={this.handleModalClose}
          addItems={this.props.AddProductItem}
          btnName="Add Product"
        />
        <GlobalStyle />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product && state.product.Item
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    AddProductItem: (data) => dispatch(AddProductItem(data)),
    deleteProduct: (index) => dispatch(deleteProduct(index)),
    searchProducts: (value) => dispatch(searchProducts(value)),
    updateProduct: (data) => dispatch(updateProduct(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
