import React, { Component } from 'react';
import { Modal, Button, ModalVariant, TextInput, Form, FormGroup, Grid, GridItem, SearchInput, Flex, FlexItem } from '@patternfly/react-core';



interface IState {
    refNo: any
    name: string
    Reseller: any
}
interface IProps {
    handleModalClose: any,
    showModal: boolean,
    editData: any,
    updateItem: any,
}
class EditModal extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            refNo: props.editData && props.editData.refNo,
            name: props.editData && props.editData.name,
            Reseller: props.editData && props.editData.Reseller,
        };
    }

    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };

    onSubmitUpdate = (e: any) => {
        e.preventDefault()
        let data = {
            refNo: this.state.refNo,
            name: this.state.name,
            reseller: this.state.Reseller,
            id: this.props.editData.id,
        }
        this.props.updateItem(data);
        this.handleModalToggle();
    }


    handleEditInput = (e: any) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value } as IState)
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    variant={ModalVariant.medium}
                    aria-label="My modal context"
                    title="Edit Items"
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
                            <GridItem span={5}>
                                <FormGroup label="Code :" isRequired fieldId="simple-form-Code" >
                                    <input
                                        style={{ width: "100%" }}
                                        type="text"
                                        placeholder="code"
                                        onChange={this.handleEditInput}
                                        name="refNo"
                                        defaultValue={this.props.editData.refNo}
                                    />
                                </FormGroup>
                            </GridItem>
                            <GridItem span={1}></GridItem>
                            <GridItem span={6}>
                                <FormGroup label="Display Name :" isRequired fieldId="simple-Display-Name" >
                                    <input
                                        style={{ width: "100%" }}
                                        type="text"
                                        placeholder="Display Name"
                                        onChange={this.handleEditInput}
                                        name="name"
                                        defaultValue={this.props.editData.name}
                                    />
                                </FormGroup>
                            </GridItem>
                        </Grid>
                        <Grid>
                            <GridItem span={5}>
                                <FormGroup label="Price Item" isRequired fieldId="simple-form-Code" >
                                    <input
                                        style={{ width: "100%" }}
                                        type="text"
                                        placeholder="Price Item"
                                        onChange={this.handleEditInput}
                                        name="Reseller"
                                        defaultValue={this.props.editData.Reseller}
                                    />
                                </FormGroup>
                            </GridItem>
                            <GridItem span={1}></GridItem>
                        </Grid>
                        {/* <Grid style={{ marginTop: "40px" }}>
                            <GridItem span={6}>
                                <Button style={{ background: "#ffae42" }}>Add Price Item</Button>
                            </GridItem>
                            <GridItem span={6}>
                                <SearchInput
                                    placeholder='Search Reseller'
                                    onChange={this.handleSearch}
                                    onClear={() => this.handleSearch()}
                                />
                            </GridItem>
                            <GridItem span={12} style={{ marginTop: "20px" }}>
                                Reseller1,
                                Reseller2,
                                Reseller3,
                                Reseller4,
                            </GridItem>
                        </Grid> */}
                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

export default EditModal;

