import React from 'react';
import '../TableStyle.css';
import EditSalesTxnModal from '../../../components/Modals/Sales/SalesTransModal/editSalesTxnModal';
import AddSalesTxnModal from '../../../components/Modals/Sales/SalesTransModal/addSalesTxnModal';
import { Grid, GridItem } from '@patternfly/react-core';


interface IState {
    isAddModalOpen: boolean,
    isEditModalOpen: boolean,
    isMouseInside: boolean,
    editSalesTxnData: any,
}
interface IProps {
    data: any,
    head: any,
    handleDelete: any
    updateSalesTransItem: any
    handleAddItemModal: any
    isOpenAddModal: any
    handleModalClose: any
    addSalesTransItem: any
    btnName: any
    titleName: any
}

class SalesTransTable extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            isAddModalOpen: false,
            isEditModalOpen: false,
            isMouseInside: false,
            editSalesTxnData: [],
        };
    }

    handleEdit = (data) => {
        this.setState({
            isEditModalOpen: true,
            editSalesTxnData: data,
        });
    };

    handleAddSalesTxnModal = () => {
        this.setState({
            isAddModalOpen: true
        })
    }

    handleModalClose = () => {
        this.setState({
            isAddModalOpen: false,
            isEditModalOpen: false,
        });
    };

    render() {
        return (
            <React.Fragment>
                <EditSalesTxnModal
                    showModal={this.state.isEditModalOpen}
                    handleModalClose={this.handleModalClose}
                    editSalesTxnData={this.state.editSalesTxnData}
                    updateSalesTxn={this.props.updateSalesTransItem}
                    titleName="Edit Sales Transection"
                />
                <AddSalesTxnModal
                    showAddModal={this.state.isAddModalOpen}
                    handleModalClose={this.handleModalClose}
                    titleName={this.props.titleName}
                    addSalesTxn={this.props.addSalesTransItem}
                />
                <button onClick={this.handleAddSalesTxnModal}
                    style={{ borderRadius: "20px", marginRight: "20px", marginBottom: "10px", marginTop: "-24px", background: "#ffae42", border: "none", float: "right", color: "black" }} >
                    {this.props.btnName}
                </button>
                <div className="table_style">
                    <table className="table">
                        <thead >
                            {
                                this.props.head.map((header, i) => {
                                    return (
                                        <tr key={i}>
                                            <Grid>
                                                <GridItem span={1}>
                                                    <th>
                                                        <input
                                                            type="checkbox"
                                                            onChange={e => {
                                                                let value = e.target.checked;
                                                                this.setState(
                                                                    this.props.data.map(d => {
                                                                        d.select = value;
                                                                        return d;
                                                                    })
                                                                );
                                                            }}
                                                        /> All
                                            </th>
                                                </GridItem>
                                                <GridItem span={2}>
                                                    <th>{header.refNo}</th>
                                                </GridItem>
                                                <GridItem span={3}>
                                                    <th>{header.productName}</th>
                                                </GridItem>
                                                <GridItem span={2}>
                                                    <th>{header.reseller}</th>
                                                </GridItem>
                                                <GridItem span={3}>
                                                    <th>{header.salesAmount}</th>
                                                </GridItem>
                                                <GridItem span={1}>
                                                    <th>{header.action}</th>
                                                </GridItem>
                                            </Grid>
                                        </tr>
                                    )
                                })
                            }
                        </thead>
                        <tbody>
                            {this.props.data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <Grid>
                                            <GridItem span={1}>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={item.select}
                                                        onChange={e => {
                                                            let value = e.target.checked;
                                                            this.setState(
                                                                this.props.data.map(sd => {
                                                                    if (sd.id === item.id) {
                                                                        sd.select = value;
                                                                    }
                                                                    return sd;
                                                                })
                                                            );
                                                        }}
                                                    />
                                                </td>
                                            </GridItem>
                                            <GridItem span={2}>
                                                <td>{item.refNo}</td>
                                            </GridItem>
                                            <GridItem span={3}>
                                                <td>{item.productName}</td>
                                            </GridItem>
                                            <GridItem span={2}>
                                                <td>{item.reseller}</td>
                                            </GridItem>
                                            <GridItem span={3}>
                                                <td>{item.salesAmount}</td>
                                            </GridItem>
                                            <GridItem span={1}>
                                                <td >
                                                    <button onClick={() => this.handleEdit(item)} style={ButtonStyel} >
                                                        <span className="fas fa-pencil-alt"></span>
                                                    </button>
                                                    <button onClick={() => this.props.handleDelete(item)} style={ButtonStyel}>
                                                        <span className="fas fa-trash-alt"></span>
                                                    </button>
                                                </td>
                                            </GridItem>
                                        </Grid>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}
const ButtonStyel = {
    border: "none",
    background: "none",
    marginTop: "auto"
}

export default SalesTransTable;