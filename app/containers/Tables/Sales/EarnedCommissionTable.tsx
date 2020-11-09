import React from 'react';
import '../TableStyle.css';
import EditEarnedCommisionModal from '../../../components/Modals/Sales/EarnedCommModal/editEarnedComModal';
import AddEarnedCommisionModal from '../../../components/Modals/Sales/EarnedCommModal/addearnedComModal';


interface IState {
    isAddModalOpen: boolean,
    isEditModalOpen : boolean,
    isMouseInside: boolean,
    editCommisionData: any,
}
interface IProps {
    data: any,
    head: any,
    handleDelete: any
    updateEarnedCommision: any
    handleAddItemModal: any
    isOpenAddModal: any
    handleModalClose: any
    addIEarnedCommision: any
    btnName: any
}

class EarnedCommissionTable extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            isAddModalOpen: false,
            isEditModalOpen: false,
            isMouseInside: false,
            editCommisionData: [],
        };
    }

    handleEdit = (data) => {
        this.setState({
            isEditModalOpen: true,
            editCommisionData: data,
        });
    };

    handleAddCommisionModal = () =>{
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
                <EditEarnedCommisionModal
                    showModal={this.state.isEditModalOpen}
                    handleModalClose={this.handleModalClose}
                    editCommiData={this.state.editCommisionData}
                    updateEarnedCommiItem={this.props.updateEarnedCommision}
                    titleName="Edit Earned Commission"
                />
                 <AddEarnedCommisionModal 
                    showAddModal={this.state.isAddModalOpen}
                    handleModalClose={this.handleModalClose}
                    buttonName={this.props.btnName}
                    addEarnedCommiItems = {this.props.addIEarnedCommision}
                />
                <button onClick={this.handleAddCommisionModal} 
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
                                            <th>{header.commission}</th>
                                            <th>{header.transectionItem}</th>
                                            <th>{header.commissionAmount}</th>
                                            <th>{header.currency}</th>
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
                                        <td>{item.commission}</td>
                                        <td>{item.transectionItem}</td>
                                        <td>{item.commissionAmount}</td>
                                        <td>{item.currency}</td>
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

export default EarnedCommissionTable;