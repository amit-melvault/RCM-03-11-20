import React, { Component } from 'react'
import './AddProduct.css'
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import ProductHeader from '../ProductHeader';
import history from '../../../../utils/history';
import {connect} from 'react-redux';
import {AddProductItem} from '../../../../Redux/Actions/action'
import {
    Form,
    FormGroup,
    TextInput,
    Button,
} from '@patternfly/react-core';

const selectedItem = [
    { name: "Select", value: "Select" },
    { name: "Gross Amount", value: "GrossAmount" },
    { name: "Net Amount", value: "NetAmount" },
    { name: "Approx Amount", value: "ApproxAmount" },
]

interface IState {
    isOpenAlert: boolean,
    refNo: any,
    name: string,
    Reseller: any,
    id: number,

}
interface IProps {
    AddProductItem: any,
}
class AddProduct extends Component<IProps, IState> {

    constructor(props) {
        super(props)
        this.state = {
            isOpenAlert: false,
            id:1,
            refNo: "",
            name: "",
            Reseller: "",
        }
    }
    handleInputCode = (refNo) => {
        this.setState({ refNo })
    }
    handleInputname = (name) => {
        this.setState({ name })
    }
    handelSelectItem = (e) => {
        this.setState({ Reseller: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            isOpenAlert:true,
            id:this.state.id+1,
            name: this.state.name,
            refNo: this.state.refNo,
            Reseller: this.state.Reseller,
        })
        this.props.AddProductItem(this.state) 
        // history.push('/product-configration/product')
        this.setState({
                id:1,
                name: "",
                refNo: "",
                Reseller: "",
        })
    }

    handleAlertClose =()=>{
        this.setState({
            isOpenAlert: false
        })
    }

    render() {
        const { refNo, name, Reseller } = this.state
        return (
            <React.Fragment>
                {
                    this.state.isOpenAlert ? 
                    <Alert 
                    variant="success" 
                    title="Product Added sucessfully" 
                    actionClose={<AlertActionCloseButton onClose={this.handleAlertClose}/>}
                    /> : null
                }
                <ProductHeader />
                <div className="Heading">
                    <h2>Add Product</h2>
                </div>
                <div className="form-group">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup label="Code :" isRequired fieldId="simple-form-Code" >
                            <TextInput
                                type="text"
                                isRequired
                                aria-label="text input example"
                                onChange={this.handleInputCode}
                                name="refNo"
                                value={refNo}
                            />
                        </FormGroup>
                        <FormGroup label="Display Name :" isRequired fieldId="simple-Display-Name" >
                            <TextInput
                                type="text"
                                isRequired
                                aria-label="text input example"
                                onChange={this.handleInputname}
                                name="name"
                                value={name} />
                        </FormGroup>
                        <FormGroup label="Price-Item :" isRequired fieldId="simple-Price-Item" >
                            <select onChange={this.handelSelectItem}>
                                {
                                    selectedItem.map((item, i) => {
                                        return (
                                            <option key={i} value={item.value}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </FormGroup>
                        <Button className="btn"
                            onClick={this.onSubmit}
                        >Save</Button>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AddProductItem: (data)=>dispatch(AddProductItem(data))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(AddProduct);