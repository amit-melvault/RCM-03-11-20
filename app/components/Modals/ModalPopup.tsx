import React, { Component } from 'react'
import { Modal, Button, ModalVariant, Form, FormGroup, Grid, GridItem, Alert, AlertActionCloseButton } from '@patternfly/react-core';



interface IState {}

interface IProps {
    showModal: boolean,
    handleModalClose: any
}

class ModalPopup extends Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            isOpenAlert: false
        }
    }
    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };


    render() {
        return (
            <React.Fragment>
                <Modal
                    variant={ModalVariant.medium}
                    aria-label="My modal context"
                    title={this.props.buttonName}
                    isOpen={this.props.showModal}
                    onClose={this.handleModalToggle}
                >
                    {this.props.children}
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalPopup;
