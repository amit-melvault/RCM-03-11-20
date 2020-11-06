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
    commission: any,
    transectionItem: any,
    commissionAmount: any,
    currency: any
}

interface IProps {
    showAddModal: boolean,
    handleModalClose: any
    buttonName: any
    addEarnedCommiItems: any
}
const commission = [
    { name: "Riffil commission", value: "Riffil" },
    { name: "Tiered Commission", value: "Tiered" },
    { name: "Revenue Commission", value: "Revenue" },
]
const transectionItem = [
    { name: "transection1", value: "trans1" },
    { name: "transection2", value: "trans2" },
    { name: "transection3", value: "trans3" },
]
const currency = [
    { name: "United State doller", value: "USD" },
    { name: "Indian rupee", value: "ISD" },
    { name: "Euro", value: "Euro" },
]
class AddEarnedCommisionModal extends Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            isOpenAlert: false,
            id: 1,
            commission: '',
            transectionItem: '',
            commissionAmount: '',
            currency: ''
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
            commission: this.state.commission,
            transectionItem: this.state.transectionItem,
            commissionAmount: this.state.commissionAmount,
            currency: this.state.currency
        })
        console.log(this.state)
        this.props.addEarnedCommiItems(this.state)
        this.handleModalToggle();
        this.setState({
            id: 1,
            commission: '',
            transectionItem: '',
            commissionAmount: '',
            currency: ''
        })
    }

    handleCommision = (e) => {
        this.setState({ commission: e.target.value })
    }
    handleTransectionItem = (e) => {
        this.setState({ transectionItem: e.target.value })
    }
    handleCommisionAmount = (e) => {
        this.setState({ commissionAmount: e.target.value })
    }
    handleCurrency = (e) => {
        this.setState({ currency: e.target.value })
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
                    title={this.props.buttonName}
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
                                    <label>Commission :</label>
                                    <select onChange={this.handleCommision} className="form-control">
                                        {
                                            commission.map((comision, i) => {
                                                return <option key={i} value={comision.value}>{comision.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Transaction item:</label>
                                    <select onChange={this.handleTransectionItem} className="form-control">
                                        {
                                            transectionItem.map((trans, i) => {
                                                return <option key={i} value={trans.value}>{trans.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Commission Amount:</label>
                                    <input
                                        type="txet"
                                        className="form-control"
                                        onChange={this.handleCommisionAmount}
                                        name="commissionAmount"
                                        value={this.state.commissionAmount}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Currency:</label>
                                    <select onChange={this.handleCurrency} className="form-control">
                                        {
                                            currency.map((currency, i) => {
                                                return <option key={i} value={currency.value}>{currency.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </GridItem>

                        </Grid>
                    </Form>
                </Modal>
            </React.Fragment>
        )
    }
}

export default AddEarnedCommisionModal;