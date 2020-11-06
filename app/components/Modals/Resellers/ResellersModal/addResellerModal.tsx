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
   name:any
   phone:any
   email:any
}
interface IProps {
    handleModalClose: any,
    showAddModal: boolean,
    // editCommiData: any,
    addReseller: any,
    titleName: any
}

class AddResellerModal extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            phone:'',
            email:'',
        };
    }

    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };

    onSubmitUpdate = (e: any) => {
        e.preventDefault()
        let data = {
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email,
        }
        this.props.addReseller(data);
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
                                    <label>Name :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeReseller}
                                        name="name"
                                        value={this.state.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Contact Phone :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeReseller}
                                        name="phone"
                                        value={this.state.phone}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChangeReseller}
                                        name="email"
                                        value={this.state.email}
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

export default AddResellerModal;

