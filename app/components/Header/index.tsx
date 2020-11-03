import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { SearchInput, Button } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { H2, H6, Div } from './HeaderStyle';
import AddModal from '../Modals/AddModal';




interface IState {
   
}

interface IProps {
    btnName: string,
    heading: string,
    subTitle: string,
    data: any,
    searchInputValue: any
    handleSearchChange: any
    handleAddItemModal: any
    isOpenAddModal: any
    handleModalClose: any
    addItems: any
}

class Header extends React.Component<IProps, IState>{
  
    render() {
        return (
            <React.Fragment>
                <AddModal 
                    showAddModal={this.props.isOpenAddModal}
                    handleModalClose={this.props.handleModalClose}
                    buttonName={this.props.btnName}
                    addItems = {this.props.addItems}
                />
                <Grid style={{ marginTop: "15px" }} sm={3} md={3} lg={3} xl2={3}>
                    <GridItem span={6} sm={6} md={6} lg={6} xl={6} xl2={6}>
                        <H2>{this.props.heading}</H2>
                        <H6>{this.props.subTitle}</H6>
                    </GridItem>
                    <GridItem span={3} sm={3} md={3}>

                        <SearchInput
                            style={{ marginTop: "10px" }}
                            placeholder='Search here'
                            value={this.props.searchInputValue}
                            onChange={this.props.handleSearchChange}
                            onClear={(evt) => this.props.handleSearchChange('', evt)}
                        />

                    </GridItem>
                    <GridItem span={3} sm={3} md={3}>
                        <Div>
                            <Button variant="secondary" onClick={this.props.handleAddItemModal}
                                style={{ borderRadius: "5px", background: "#ffae42", margin: "10px" }} >
                                {/* <Link to="/product-configration/add"
                                    style={{ textDecoration: "none", color: "white" }}
                                >{this.props.btnName}</Link> */}{this.props.btnName}
                            </Button>
                            {/* <Button variant="danger" style={{ margin: '10px', borderRadius: '5px', background:"#f80045"}}
                                onClick={() => this.props.deleteProduct(this.props.data)}
                            >Delete</Button> */}
                        </Div>
                    </GridItem>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Header;
