import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  display: flex;
  background: lightyellow;
  border: 1px solid lightgray;
  list-style: none;
  text-decoration: none;
  width: 100%;

  .pf-c-dropdown__menu.pf-m-align-right {
    position: static;
    top: 40px;
  }
  .pf-c-nav__link{
    color:#040404;
  }
  .pf-c-dropdown__toggle::before, .pf-c-dropdown__toggle.pf-m-action .pf-c-dropdown__toggle-button::before{
    border:none;
   
  }
  
`;
export const LinkStyle = styled.a`
  color:black;
`;

export const Span = styled.span`
    position:static;
    margin-top: 9px;
    width: 180px;
    margin-left: 8%;
    select{
    width: -webkit-fill-available;
    height: 39px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background: #415e78;
    color:white;
    }
`;
export const P = styled.p`
    margin-top: 7px;
    width: 125px;
    margin: 10px;
`;
export const Img = styled.img`
    margin-top: 7px;
    width: 47px;
    margin: 5px;
    border: 1px solid black;
    border-radius:60px;
    margin-left:-20px
  
`;

