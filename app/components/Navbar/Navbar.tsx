import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/melody.svg';
import ProfileImage from '../../images/profile.png';


const options = [
    { value: 'Select', label: '-Select-' },
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Telgu', label: 'Telgu' },
]

interface IState {
    activeItem: any,
    isOpen: boolean,
    SelectLanguage: any,

}

interface IProps {

}

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SelectLanguage: "",
        }
    }

    handleSelect = (e) => {
        this.setState({
            SelectLanguage: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light" style={{background:'#e7bf6e'}}>
                    <img src={Logo} alt="logo" style={{ width: '200px', padding: '15px' }} />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">DashBoard
                                <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown active">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sales
                                 </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/earned-comission">Earned Commission</Link>
                                    <Link className="dropdown-item" to="/sales-transection">Sales Transection</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown active">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Reseller
                                 </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/reseller">Reseller</Link>
                                    <Link className="dropdown-item" to="/reseller-group">Reseller Group</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown active">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Product configration
                                 </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/product-configration/product">Product</Link>
                                    <Link className="dropdown-item" to="/product-configration/price-item">Price Item type</Link>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/comission">
                                    Commission <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown active">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Athentication
                                 </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/user">User</Link>
                                    <Link className="dropdown-item" to="/group">Group</Link>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <select onChange={this.handleSelect} style={selectStyle}>
                                    {
                                        options.map((item, i) => {
                                            return <option key={i} value={item.value} >{item.label}</option>
                                        })
                                    }
                                </select>
                            </li>
                            <li className="nav-item active">
                                <img src={ProfileImage} alt="logo" className="Image" style={profile}></img>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
const profile ={
    width: '57px',
    margin:'3px',
    border: '1px solid black',
    borderRadius: '50px',
    marginLeft: '13px',
}
const selectStyle ={
    width: '-webkit-fill-available',
    height: '39px',
    border: '1px solid lightgray',
    borderRadius: '5px',
    background: '#f8b300',
    color:'black',
}
export default Navbar;