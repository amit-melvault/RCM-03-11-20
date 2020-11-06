import React from 'react';

import EditSalesTxnModal from '../../../components/Modals/Sales/SalesTransModal/editSalesTxnModal';
import AddSalesTxnModal from '../../../components/Modals/Sales/SalesTransModal/addSalesTxnModal';


interface IState {
    isAddModalOpen: boolean,
    isEditModalOpen : boolean,
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

    handleAddSalesTxnModal = () =>{
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
                    addSalesTxn = {this.props.addSalesTransItem}
                />
                <button onClick={this.handleAddSalesTxnModal} 
                style={{ borderRadius: "20px", marginRight: "20px", marginBottom: "10px", marginTop: "-24px", background: "#ffae42", border: "none", float: "right", color: "black"}} >
                    {this.props.btnName}
                </button>
                <div className="table_style">
                    <table className="table table-striped">
                        <thead >
                            {
                                this.props.head.map((header, i) => {
                                    return (
                                        <tr key={i}>
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
                                            <th>{header.refNo}</th>
                                            <th>{header.productName}</th>
                                            <th>{header.reseller}</th>
                                            <th>{header.salesAmount}</th>
                                            <th>{header.action}</th>
                                        </tr>
                                    )
                                }) 
                            }
                        </thead>
                        <tbody>
                            {this.props.data.map((item, i) => {
                                return (
                                    <tr key={i}>
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
                                        <td>{item.refNo}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.reseller}</td>
                                        <td>{item.salesAmount}</td>
                                        <td >
                                            <button onClick={() => this.handleEdit(item)} style={ButtonStyel} >
                                                <span className="fas fa-pencil-alt"></span>
                                            </button>
                                            <button onClick={() => this.props.handleDelete(item)} style={ButtonStyel}>
                                                <span className="fas fa-trash-alt"></span>
                                            </button>
                                        </td>
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