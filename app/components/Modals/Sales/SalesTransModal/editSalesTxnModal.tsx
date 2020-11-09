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
    refNo: any,
    productName: any,
    reseller: any,
    salesAmount: any
}

interface IProps {
    showModal: boolean,
    handleModalClose: any
    titleName: any
    updateSalesTxn: any
    editSalesTxnData: any
}

class EditSalesTxnModal extends Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            isOpenAlert: false,
            refNo: props.editSalesTxnData && props.editSalesTxnData.refNo,
            productName: props.editSalesTxnData && props.editSalesTxnData.productName,
            reseller: props.editSalesTxnData && props.editSalesTxnData.reseller,
            salesAmount: props.editSalesTxnData && props.editSalesTxnData.salesAmount
        }
    }
    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };

    onSubmitUpdate = (e) => {
        e.preventDefault()
        let data={
            refNo: this.state.refNo,
            productName: this.state.productName,
            reseller: this.state.reseller,
            salesAmount: this.state.salesAmount,
            id: this.props.editSalesTxnData.id,
        }
        this.props.updateSalesTxn(data)
        this.handleModalToggle();
        this.setState({
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
                    isOpen={this.props.showModal}
                    onClose={this.handleModalToggle}
                    actions={[
                        <Button key="add" variant="primary" onClick={this.onSubmitUpdate} style={{ marginLeft: "auto", background: "#ffae42" }}>
                            Update
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
                                        defaultValue={this.props.editSalesTxnData.refNo}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product Name:</label>
                                    <input
                                        type="txet"
                                        className="form-control"
                                        onChange={this.handleChnageAddSales}
                                        name="productName"
                                        defaultValue={this.props.editSalesTxnData.productName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Reseller:</label>
                                    <input
                                        type="txet"
                                        className="form-control"
                                        onChange={this.handleChnageAddSales}
                                        name="reseller"
                                        defaultValue={this.props.editSalesTxnData.reseller}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Amount:</label>
                                    <input
                                        type="txet"
                                        className="form-control"
                                        onChange={this.handleChnageAddSales}
                                        name="salesAmount"
                                        defaultValue={this.props.editSalesTxnData.salesAmount}
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

export default EditSalesTxnModal;