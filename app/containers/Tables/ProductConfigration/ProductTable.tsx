import React from 'react';
import '../TableStyle.css';
import EditProductModal from '../../../components/Modals/ProductConfigration/ProductModal/editProductModal';
import AddProductModal from '../../../components/Modals/ProductConfigration/ProductModal/addProductModal'
import { Grid, GridItem } from '@patternfly/react-core';


interface IState {
    isModalOpen: boolean,
    isButton: boolean,
    editData: any,
}
interface IProps {
    data: any,
    head: any,
    handleDelete: any
    updateItem: any
    handleAddItemModal: any
    isOpenAddModal: any
    handleModalClose: any
    addItems: any
    btnName: any
}

class ProductTable extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isButton: false,
            editData: [],
        };
    }

    handleEdit = (data) => {
        this.setState({
            isModalOpen: true,
            editData: data,
        });
    };

    handleModalClose = isshowModal => {
        this.setState({
            isModalOpen: isshowModal,
        });
    };

    //   mouseEnter = () => {
    //     this.setState({ isMouseInside: true });
    //   }

    //   mouseLeave = () => {
    //     this.setState({ isMouseInside: false });
    //   }
    render() {
        return (
            <React.Fragment>
                <EditProductModal
                    showModal={this.state.isModalOpen}
                    handleModalClose={this.handleModalClose}
                    editData={this.state.editData}
                    updateItem={this.props.updateItem}
                />
                <AddProductModal
                    showAddModal={this.props.isOpenAddModal}
                    handleModalClose={this.props.handleModalClose}
                    buttonName={this.props.btnName}
                    addItems={this.props.addItems}
                />
                <button onClick={this.props.handleAddItemModal} style={{ borderRadius: "20px", marginRight: "20px", marginBottom: "10px", marginTop: "-24px", background: "#ffae42", border: "none", float: "right", color: "black", }} >
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
                                                <GridItem span={4}>
                                                    <th>{header.name}</th>
                                                </GridItem>
                                                <GridItem span={4}>
                                                    <th>{header.Reseller}</th>
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
                                            <GridItem span={4}>
                                                <td>{item.name}</td>
                                            </GridItem>
                                            <GridItem span={4}>
                                                <td>{item.Reseller}</td>
                                            </GridItem>
                                            <GridItem span={1}>
                                                <td>
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

export default ProductTable;