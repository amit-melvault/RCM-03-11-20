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
    groupName: any
    name: any
    phone: any
    email: any
}
interface IProps {
    handleModalClose: any,
    showEditModal: boolean,
    editResellerGroupData: any,
    updateResellerGroup: any,
    titleName: any
}

class EditResellerGroupModal extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            groupName: props.editResellerGroupData && props.editResellerGroupData.groupName,
            name: props.editResellerGroupData && props.editResellerGroupData.name,
            phone: props.editResellerGroupData && props.editResellerGroupData.phone,
            email: props.editResellerGroupData && props.editResellerGroupData.email,
        };
    }

    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };

    onSubmitUpdate = (e: any) => {
        e.preventDefault()
        let data = {
            groupName: this.state.groupName,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            id: this.props.editResellerGroupData.id
        }
        this.props.updateResellerGroup(data);
        this.handleModalToggle();
    }


    handleChangeReseller = (e) => {
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
                                    <label> Reseller Group :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeReseller}
                                        name="groupName"
                                        defaultValue={this.props.editResellerGroupData.groupName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Name :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeReseller}
                                        name="name"
                                        defaultValue={this.props.editResellerGroupData.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Contact Phone :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeReseller}
                                        name="phone"
                                        defaultValue={this.props.editResellerGroupData.phone}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeReseller}
                                        name="email"
                                        defaultValue={this.props.editResellerGroupData.email}
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

export default EditResellerGroupModal;

