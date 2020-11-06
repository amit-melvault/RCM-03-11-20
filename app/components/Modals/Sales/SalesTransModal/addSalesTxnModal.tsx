import React, { Component } from 'react'
import {
    Modal,
    Button,
    ModalVariant,
    Form,
    FormGroup,
    Grid,
    GridItem,
    Alert,
    AlertActionCloseButton
} from '@patternfly/react-core';



interface IState {
    isOpenAlert: boolean,
    id: number,
    refNo: any,
    productName: any,
    reseller: any,
    salesAmount: any
}

interface IProps {
    showAddModal: boolean,
    handleModalClose: any
    titleName: any
    // updateSalesTxn: any
    addSalesTxn: any
}

class AddSalesTxnModal extends Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            isOpenAlert: false,
            id: 1,
            refNo: '',
            productName: '',
            reseller: '',
            salesAmount: ''
        }
    }
    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };

    onSubmitUpdate = (e) => {
        e.preventDefault()
        this.setState({
            isOpenAlert: true,
            id: this.state.id + 1,
            refNo: this.state.refNo,
            productName: this.state.productName,
            reseller: this.state.reseller,
            salesAmount: this.state.salesAmount
        })
        console.log(this.state)
        this.props.addSalesTxn(this.state)
        this.handleModalToggle();
        this.setState({
            id: 1,
            refNo: '',
            productName: '',
            reseller: '',
            salesAmount: ''
        })
    }

    handleChnageAddSales = (e) => {
        this.setState({ [e.target.name]:e.target.value } as IState)
    }
  
    handleAlertClose = () => {
        this.setState({
            isOpenAlert: false
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.isOpenAlert ?
                        <Alert
                            variant="success"
                            title="Product Added sucessfully"
                            actionClose={<AlertActionCloseButton onClose={this.handleAlertClose} />}
                        /> : null
                }
                <Modal
                    variant={ModalVariant.medium}
                    aria-label="My modal context"
                    title={this.props.titleName}
                    isOpen={this.props.showAddModal}
                    onClose={this.handleModalToggle}
                    actions={[
                        <Button key="add" variant="primary" onClick={this.onSubmitUpdate} style={{ marginLeft: "auto", background: "#ffae42" }}>
                            Add
                         </Button>,
                        <Button key="cancel" variant="link" onClick={this.handleModalToggle} >
                            Cancel
                         </Button>
                    ]}
                >
                    <Form onSubmit={this.onSubmitUpdate}>
                        <Grid>
                            <GridItem span={8}>
                                <div className="form-group">
                                    <label>Refrence No :</label>
                                    <input
                                        type="txet"
                                        className="form-control"
                                        onChange={this.handleChnageAddSales}
                                        name="refNo"
                                        value={this.state.refNo}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product Name:</label>
                                    <input
                                        type="txet"
                                        className="form-control"
                                        onChange={this.handleChnageAddSales}
                                        name="productName"
                                        value={this.state.productName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Reseller:</label>
                                    <input
                                        type="txet"
                                        className="form-control"
                                        onChange={this.handleChnageAddSales}
                                        name="reseller"
                                        value={this.state.reseller}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Amount:</label>
                                    <input
                                        type="txet"
                                        className="form-control"
                                        onChange={this.handleChnageAddSales}
                                        name="salesAmount"
                                        value={this.state.salesAmount}
                                    />
                                </div>
                            </GridItem>

                        </Grid>
                    </Form>
                </Modal>
            </React.Fragment>
        )
    }
}

export default AddSalesTxnModal;