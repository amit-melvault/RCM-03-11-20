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
    name: any,
    refNo: any,
    Reseller: any
}

interface IProps {
    showAddModal: boolean,
    handleModalClose: any
    buttonName: any
    addItems: any
}

class AddProductModal extends Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            isOpenAlert: false,
            id: 1,
            name: '',
            refNo: '',
            Reseller: '',
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
            name: this.state.name,
            refNo: this.state.refNo,
            Reseller: this.state.Reseller,
        })
        this.props.addItems(this.state)
        this.handleModalToggle();
        this.setState({
            id: 1,
            name: "",
            refNo: "",
            Reseller: "",
        })
    }

    handleEditInput = (e) => {
        this.setState({ [e.target.name]: e.target.value } as IState)
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
                                    <label>Code :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="code"
                                        onChange={this.handleEditInput}
                                        name="refNo"
                                        value={this.state.refNo}
                                    />
                                </div>

                                <div className="form-group" >
                                    <label>Display Name :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Display Name"
                                        onChange={this.handleEditInput}
                                        name="name"
                                        value={this.state.name}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Price Item :</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Price Item"
                                        onChange={this.handleEditInput}
                                        name="Reseller"
                                        value={this.state.Reseller}
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

export default AddProductModal;