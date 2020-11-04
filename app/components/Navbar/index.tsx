import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader, Button } from '@patternfly/react-core';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import Logo from '../../images/melody.svg';
import Mask from '../../images/mask.svg';
import Mask1 from '../../images/mask1.svg';
import Shape1 from '../../images/shape1.svg';
import Shape2 from '../../images/shape2.svg';
import Shape3 from '../../images/shape3.svg';
import Notification from '../../images/shape4.svg';
import Auth from '../../images/auth.svg';
import ProfileImage from '../../images/profile.png';
import { Avatar } from '@patternfly/react-core';
import Select from 'react-select';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
import { NavbarStyle, Span, P, Img } from './NavbarStyle'



const options = [
  { value: 'Select', label: '-Select Language-' },
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

class Navbar extends React.Component<IProps, IState>{
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      SelectLanguage: "",
      isOpen: false,
    };
  }

  onSelect = (result) => {
    this.setState({
      activeItem: result
    });
  };
  onSelect1 = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleSelect = (e) => {
    this.setState({
      SelectLanguage: e.target.value
    })
  }
  onToggle1 = isOpen => {
    this.setState({
      isOpen
    });
  };
  render() {
    const { activeItem, isOpen } = this.state;
    const SalesMenu = [
      <DropdownItem key="earned">
        <Link to="/earned-comission" style={linkStyle}>
          Earned Comission
        </Link>
      </DropdownItem>,
      <DropdownItem key="slaes">
        <Link to="/sales-transection" style={linkStyle}>
          Sales transection
        </Link>
      </DropdownItem>
    ];
    const ResellerMenu = [
      <DropdownItem key="reseller-group">
        <Link to="/reseller-group" style={linkStyle}>
          Reseller Group
        </Link>
      </DropdownItem>,
      <DropdownItem key="reseller">
        <Link to="/reseller" style={linkStyle}>
          Reseller
        </Link>
      </DropdownItem>
    ];
    const ProductConfigrationMenu = [
      <DropdownItem key="price">
        <Link to="/product-configration/price-item" style={linkStyle}>
          Price Item types
        </Link>
      </DropdownItem>,
      <DropdownItem key="Products">
        <Link to="/product-configration/product" style={linkStyle}>
          Products
              </Link>
      </DropdownItem>
    ];
    const AthenticationMenu = [
      <DropdownItem key="groups">
        <Link to="/athentication" style={linkStyle}>
          Groups
        </Link>
      </DropdownItem>,
      <DropdownItem key="user">
        <Link to="/user" style={linkStyle}>
          User
        </Link>
      </DropdownItem>
    ];

    return (

      <React.Fragment>
        <Nav onSelect={this.onSelect} variant="horizontal">
          <NavbarStyle>
            <img src={Logo} alt="logo" style={{ width: '200px', padding: '15px' }} />

            <NavItem itemId={0} isActive={activeItem.itemId === 0} >
              <Link to="/">
                Dashboard
                        {/* <Avatar src={Mask} alt="avatar"></Avatar> */}
              </Link>
            </NavItem>
            <NavItem preventDefault itemId={1} isActive={activeItem.itemId === 1} >
              <Dropdown
                onSelect={this.onSelect1}
                toggle={
                  <DropdownToggle onToggle={this.onToggle1} toggleIndicator={CaretDownIcon} id="toggle-id-4">
                    Sales
                  </DropdownToggle>
                }
                isOpen={isOpen && activeItem.itemId === 1}
                dropdownItems={SalesMenu}
                position={DropdownPosition.right}
                menuAppendTo={() => document.body}
              />

            </NavItem>
            <NavItem preventDefault itemId={2} isActive={activeItem.itemId === 2} >
              <Dropdown
                onSelect={this.onSelect1}
                toggle={
                  <DropdownToggle onToggle={this.onToggle1} toggleIndicator={CaretDownIcon} id="toggle-id-4">
                    Reseller
                  </DropdownToggle>
                }
                isOpen={isOpen && activeItem.itemId === 2}
                dropdownItems={ResellerMenu}
                position={DropdownPosition.right}
                menuAppendTo={() => document.body}
              />
            </NavItem>
            <NavItem preventDefault itemId={3} isActive={activeItem.itemId === 3} >
              <Dropdown
                onSelect={this.onSelect1}
                toggle={
                  <DropdownToggle onToggle={this.onToggle1} toggleIndicator={CaretDownIcon} id="toggle-id-4">
                    Product Configration
                  </DropdownToggle>
                }
                isOpen={isOpen && activeItem.itemId === 3}
                dropdownItems={ProductConfigrationMenu}
                position={DropdownPosition.right}
                menuAppendTo={() => document.body}
              />
            </NavItem>
            <NavItem itemId={4} isActive={activeItem.itemId === 4} >
              <Link to="/comission">
                Commision
                        {/* <Avatar src={Mask} alt="avatar"></Avatar> */}
              </Link>
            </NavItem>
            <NavItem preventDefault itemId={5} isActive={activeItem.itemId === 5} >
              <Dropdown
                onSelect={this.onSelect1}
                toggle={
                  <DropdownToggle onToggle={this.onToggle1} toggleIndicator={CaretDownIcon} id="toggle-id-4">
                    Authentication
                  </DropdownToggle>
                }
                isOpen={isOpen && activeItem.itemId === 5}
                dropdownItems={AthenticationMenu}
                position={DropdownPosition.right}
                menuAppendTo={() => document.body}
              />
            </NavItem>
            <Span>
              <select onChange={this.handleSelect}>
                {
                  options.map((item, i) => {
                    return <option key={i} value={item.value} >{item.label}</option>
                  })
                }
              </select>
            </Span>
            {/* <Span>
              <Select options={options} onChange={this.onSelect} />
            </Span> */}
            <P>
              <Avatar src={Notification} alt="avatar"></Avatar>
            </P>
            <Img src={ProfileImage} alt="logo" className="Image"></Img>
          </NavbarStyle>
        </Nav>
      </React.Fragment>
    );
  }
}

const linkStyle = {
  color: "black",
}
export default Navbar;
