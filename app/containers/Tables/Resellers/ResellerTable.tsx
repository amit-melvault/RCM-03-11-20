import React from 'react';

import EditResellerModal from '../../../components/Modals/Resellers/ResellersModal/editResellerModal';
import AddResellerModal from '../../../components/Modals/Resellers/ResellersModal/addResellerModal';


interface IState {
    isAddModalOpen: boolean,
    isEditModalOpen : boolean,
    isMouseInside: boolean,
    editResellerData: any,
}
interface IProps {
    data: any,
    head: any,
    handleDelete: any
    handleAddItemModal: any
    isOpenAddModal: any
    handleModalClose: any
    updateResellerData: any
    addReseller: any
    titleName: any
    btnName: any
}

class ResellerTable extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            isAddModalOpen: false,
            isEditModalOpen: false,
            isMouseInside: false,
            editResellerData: [],
        };
    }

    handleEdit = (data) => {
        this.setState({
            isEditModalOpen: true,
            editResellerData: data,
        });
    };

    handleAddResellerModal = () =>{
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
                <EditResellerModal
                    showEditModal={this.state.isEditModalOpen}
                    handleModalClose={this.handleModalClose}
                    editResellerData={this.state.editResellerData}
                    updateResellerData={this.props.updateResellerData}
                    titleName="Edit Earned Commission"
                />
                 <AddResellerModal 
                    showAddModal={this.state.isAddModalOpen}
                    handleModalClose={this.handleModalClose}
                    titleName={this.props.titleName}
                    addReseller = {this.props.addReseller}
                />
                <button onClick={this.handleAddResellerModal} 
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
                                            <th>{header.name}</th>
                                            <th>{header.phone}</th>
                                            <th>{header.email}</th>
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
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
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

export default ResellerTable;