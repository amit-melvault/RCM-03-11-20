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
    showAddModal: boolean,
    handleModalClose: any
    titleName: any
    addCommissionItem: any
}

const ratingType = [
    { name: '-select-', value: '0' },
    { name: 'Fixed Percentage', value: 'Fixed Percentage' },
    { name: 'Fixed Amount', value: 'Fixed Amount' },
    { name: 'Percentage by section', value: 'Percentage by section' },
    { name: 'Amount by section', value: 'Amount by section' },
]
const Product = [
    { name: '-select-', value: '0' },
    { name: 'prodcut1', value: 'prodcut1' },
    { name: 'prodcut2', value: 'prodcut2' },
    { name: 'prodcut3', value: 'prodcut3' },
    { name: 'prodcut4', value: 'prodcut4' },
]
const base = [
    { name: '-select-', value: '0' },
    { name: 'net Amount', value: 'net Amount' },
    { name: 'gross Amount', value: 'gross Amount' },
    { name: 'fixed amount', value: 'fixed amount' },
    { name: 'Changeable amount', value: 'Changeable amount' },
]
const commissionValueType = [
    { name: '-select-', value: '0' },
    { name: 'percentage', value: 'percentage' },
    { name: 'Amount', value: 'amount' },
]

class AddCommissionModal extends Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            name: '',
            selectRatingType: '',
            CommissionValue: '',
            selectProduct: '',
            resellerGroup: '',
            reseller: '',
            selectbase: '',
            amountFrom: '',
            amountTo: '',
            selectCommissionValueType: '',
            CommisionSectionValue: '',

        }
    }
    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };

    onSubmitUpdate = (e) => {
        e.preventDefault()
        this.setState({
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
        })
        this.props.addCommissionItem(this.state)
        this.handleModalToggle();
        this.setState({
            code: '',
            name: '',
            selectRatingType: '',
            CommissionValue: '',
            selectProduct: '',
            resellerGroup: '',
            reseller: '',
            selectbase: '',
            amountFrom: '',
            amountTo: '',
            selectCommissionValueType: '',
            CommisionSectionValue: '',
        })
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value } as IState)
    }
    handleRatingtype = (e) => {
        this.setState({
            selectRatingType: e.target.value
        })
    }
    handleProduct = (e) => {
        this.setState({
            selectProduct: e.target.value
        })
    }
    handleBase = (e) => {
        this.setState({
            selectbase: e.target.value
        })
    }
    handleCommisionValueType = (e) => {
        this.setState({
            selectCommissionValueType: e.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
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
                            <GridItem span={12}>
                                <div className="form-group">
                                    <label>Code :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="code"
                                        value={this.state.code}
                                    />
                                </div>

                                <div className="form-group" >
                                    <label>Name :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="name"
                                        value={this.state.name}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Rating Type :</label>
                                    <select className="form-control" onChange={this.handleRatingtype}>
                                        {
                                            ratingType.map((item, i) => {
                                                return <option key={i} value={item.value}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Commission Value :</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        onChange={this.handleInput}
                                        name="CommissionValue"
                                        value={this.state.CommissionValue}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product :</label>
                                    <select className="form-control" onChange={this.handleProduct}>
                                        {
                                            Product.map((item, i) => {
                                                return <option key={i} value={item.value}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Reseller Groups :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="resellerGroup"
                                        value={this.state.resellerGroup}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Reseller :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleInput}
                                        name="reseller"
                                        value={this.state.reseller}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Base :</label>
                                    <select className="form-control" onChange={this.handleBase}>
                                        {
                                            base.map((item, i) => {
                                                return <option key={i} value={item.value}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="dropdown-divider"></div>
                                <div>
                                    <h4 style={{ background: "lightgray", margin: 'revert' }}>COMMISSION  SECTIONS</h4>
                                    <Grid>
                                        <GridItem span={3}>
                                            <div className="form-group">
                                                <b><label>Amount From </label></b>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    onChange={this.handleInput}
                                                    name="amountFrom"
                                                    value={this.state.amountFrom}
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
                                                    value={this.state.amountTo}
                                                />
                                            </div>
                                        </GridItem>
                                        <GridItem span={3}>
                                            <div className="form-group">
                                                <b><label>Commission value type  </label></b>
                                                <select className="form-control" onChange={this.handleCommisionValueType}>
                                                    {
                                                        commissionValueType.map((item, i) => {
                                                            return <option key={i} value={item.value}>{item.name}</option>
                                                        })
                                                    }
                                                </select>
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
                                                    value={this.state.CommisionSectionValue}
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

export default AddCommissionModal;