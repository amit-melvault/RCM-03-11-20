import React, { Component } from 'react';
import {
    Modal,
    Button,
    ModalVariant,
    Form,
    Grid,
    GridItem,
} from '@patternfly/react-core';



interface IState {
    commission: any,
    transectionItem: any,
    commissionAmount: any,
    currency: any
}
interface IProps {
    handleModalClose: any,
    showModal: boolean,
    editCommiData: any,
    updateEarnedCommiItem: any,
    titleName: any
}

class EditEarnedCommisionModal extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            commission: props.editCommiData && props.editCommiData.commission,
            transectionItem: props.editCommiData && props.editCommiData.transectionItem,
            commissionAmount: props.editCommiData && props.editCommiData.commissionAmount,
            currency: props.editCommiData && props.editCommiData.currency
        };
    }

    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };

    onSubmitUpdate = (e: any) => {
        e.preventDefault()
        let data = {
            commission: this.state.commission,
            transectionItem: this.state.transectionItem,
            commissionAmount: this.state.commissionAmount,
            currency: this.state.currency,
            id: this.props.editCommiData.id
        }
        this.props.updateEarnedCommiItem(data);
        this.handleModalToggle();
    }


    handleChangeUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value } as IState)
    }


    render() {
        return (
            <React.Fragment>
                <Modal
                    variant={ModalVariant.medium}
                    aria-label="My modal context"
                    title={this.props.titleName}
                    isOpen={this.props.showModal}
                    onClose={this.handleModalToggle}
                    actions={[
                        <Button key="delete" variant="danger" onClick={this.handleModalToggle}
                            style={{ background: "#f80045" }}>
                            Delete Product
                         </Button>,
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
                                    <label>Commission :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeUpdate}
                                        name="commission"
                                        defaultValue={this.props.editCommiData.commission}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Transaction item:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeUpdate}
                                        name="transectionItem"
                                        defaultValue={this.props.editCommiData.transectionItem}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Commission Amount:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeUpdate}
                                        name="commissionAmount"
                                        defaultValue={this.props.editCommiData.commissionAmount}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Currency:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeUpdate}
                                        name="currency"
                                        defaultValue={this.props.editCommiData.currency}
                                    />
                                </div>
                            </GridItem>
                        </Grid>

                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

export default EditEarnedCommisionModal;

