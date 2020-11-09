import React from 'react';
import '../TableStyle.css';
import AddCommissionModal from '../../../components/Modals/Commission/addCommissionModal';
import EditCommissionModal from '../../../components/Modals/Commission/editCommissionModal'

interface IState {
    isModalOpen: boolean,
    isMouseInside: boolean,
    editCommissionData: any,
}
interface IProps {
    data: any,
    head: any,
    btnName: any
    titleName: any
    handleAddItemModal: any
    isOpenAddModal: any
    handleModalClose: any
    handleDelete: any
    addCommission: any
    updateCommission: any
}

class CommissionTable extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isMouseInside: false,
            editCommissionData: [],
        };
    }

    handleEdit = (data) => {
        this.setState({
            isModalOpen: true,
            editCommissionData: data,
        });
    };

    handleModalClose = isshowModal => {
        this.setState({
            isModalOpen: isshowModal,
        });
    };

    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }

    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }
    render() {
        return (
            <React.Fragment>
                <EditCommissionModal
                    showEditModal={this.state.isModalOpen}
                    handleModalClose={this.handleModalClose}
                    editCommissionData={this.state.editCommissionData}
                    updateCommission={this.props.updateCommission}
                    titleName="Edit Commission Modal"
                />
                <AddCommissionModal
                    showAddModal={this.props.isOpenAddModal}
                    handleModalClose={this.props.handleModalClose}
                    addCommissionItem={this.props.addCommission}
                    titleName={this.props.titleName}
                />
                <button onClick={this.props.handleAddItemModal} style={{ borderRadius: "20px", marginRight: "20px", marginBottom: "10px", marginTop: "-24px", background: "#ffae42", border: "none", float: "right", color: "black", }} >
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
                                            <th>{header.code}</th>
                                            <th>{header.name}</th>
                                            <th>{header.selectRatingType}</th>
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
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.selectRatingType}</td>
                                        <td onMouseOver={this.mouseEnter} onMouseOut={this.mouseLeave}>
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

export default CommissionTable;