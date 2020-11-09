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
    code: any,
    name: any,
    selectRatingType: any,
    CommissionValue: any,
    selectProduct: any,
    resellerGroup: any,
    reseller: any,
    selectbase: any,
    amountFrom: any,
    amountTo: any,
    selectCommissionValueType: any,
    CommisionSectionValue: any,
}

interface IProps {
    showEditModal: boolean,
    handleModalClose: any
    titleName: any
    editCommissionData: any
    updateCommission: any
}


class EditCommissionModal extends Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            code: props.editCommissionData && props.editCommissionData.code,
            name: props.editCommissionData && props.editCommissionData.name,
            selectRatingType: props.editCommissionData && props.editCommissionData.selectRatingType,
            CommissionValue: props.editCommissionData && props.editCommissionData.CommissionValue,
            selectProduct: props.editCommissionData && props.editCommissionData.selectProduct,
            resellerGroup: props.editCommissionData && props.editCommissionData.resellerGroup,
            reseller: props.editCommissionData && props.editCommissionData.reseller,
            selectbase: props.editCommissionData && props.editCommissionData.selectbase,
            amountFrom: props.editCommissionData && props.editCommissionData.amountFrom,
            amountTo: props.editCommissionData && props.editCommissionData.amountTo,
            selectCommissionValueType: props.editCommissionData && props.editCommissionData.selectCommissionValueType,
            CommisionSectionValue: props.editCommissionData && props.editCommissionData.CommisionSectionValue,

        }
    }
    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };

    onSubmitUpdate = (e) => {
        e.preventDefault()
        let data ={
            id:this.props.editCommissionData.id,
            code: this.state.code,
            name: this.state.name,
            selectRatingType: this.state.selectRatingType,
            CommissionValue: this.state.CommissionValue,
            selectProduct: this.state.selectProduct,
            resellerGroup: this.state.resellerGroup,
            reseller: this.state.reseller,
            selectbase: this.state.selectbase,
            amountFrom: this.state.amountFrom,
            amountTo: this.state.amountTo,
            selectCommissionValueType: this.state.selectCommissionValueType,
            CommisionSectionValue: this.state.CommisionSectionValue,
        }
        this.props.updateCommission(data)
        this.handleModalToggle();
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value } as IState)
    }
    
    render() {
        return (
            <React.Fragment>
                <Modal
                    variant={ModalVariant.medium}
                    aria-label="My modal context"
                    title={this.props.titleName}
                    isOpen={this.props.showEditModal}
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
                            <GridItem span={12}>
                                <div className="form-group">
                                    <label>Code :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="code"
                                        defaultValue={this.props.editCommissionData.code}
                                    />
                                </div>

                                <div className="form-group" >
                                    <label>Name :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="name"
                                        defaultValue={this.props.editCommissionData.name}
                                    />
                                </div>

                               <div className="form-group" >
                                    <label>Rating Type :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="selectRatingType"
                                        defaultValue={this.props.editCommissionData.selectRatingType}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Commission Value :</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        onChange={this.handleInput}
                                        name="CommissionValue"
                                        defaultValue={this.props.editCommissionData.CommissionValue}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Products :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="selectProduct"
                                        defaultValue={this.props.editCommissionData.selectProduct}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Reseller Groups :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="resellerGroup"
                                        defaultValue={this.props.editCommissionData.resellerGroup}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Reseller :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="reseller"
                                        defaultValue={this.props.editCommissionData.reseller}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Base :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="selectbase"
                                        defaultValue={this.props.editCommissionData.selectbase}
                                    />
                                </div>

                                <div className="dropdown-divider"></div>
                                <div>
                                    <h4 style={{background:"lightgray",margin: 'revert'}}>COMMISSION  SECTIONS</h4>
                                    <Grid>
                                        <GridItem span={3}>
                                            <div className="form-group">
                                                <b><label>Amount From </label></b>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    onChange={this.handleInput}
                                                    name="amountFrom"
                                                    defaultValue={this.props.editCommissionData.amountFrom}
                                                />
                                            </div>
                                        </GridItem>
                                        <GridItem span={3}>
                                            <div className="form-group">
                                                <b><label>Amount To </label></b>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    onChange={this.handleInput}
                                                    name="amountTo"
                                                    defaultValue={this.props.editCommissionData.amountTo}
                                                />
                                            </div>
                                        </GridItem>
                                        <GridItem span={3}>
                                        <div className="form-group">
                                                <b><label>Commission Value Type </label></b>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    onChange={this.handleInput}
                                                    name="selectCommissionValueType"
                                                    defaultValue={this.props.editCommissionData.selectCommissionValueType}
                                                />
                                            </div>
                                        </GridItem>
                                        <GridItem span={3}>
                                            <div className="form-group">
                                                <b><label>Commission Value  </label></b>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    onChange={this.handleInput}
                                                    name="CommisionSectionValue"
                                                    defaultValue={this.props.editCommissionData.CommisionSectionValue}
                                                />
                                            </div>
                                        </GridItem>
                                    </Grid>
                                </div>
                            </GridItem>
                        </Grid>
                    </Form>
                </Modal>
            </React.Fragment>
        )
    }
}

export default EditCommissionModal;