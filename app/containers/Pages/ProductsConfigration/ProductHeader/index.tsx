import React from 'react';
import './HeaderStyle.css'
import { Link } from 'react-router-dom'

export default function ProductHeader() {
    return (
        <React.Fragment>
              <div className="header_Style">
                    <Link to="/product-configration/price-item" >Price item action type</Link>
                    <Link to="/product-configration/product" style={{marginLeft:"20px"}}>Products</Link>
                </div>
        </React.Fragment>
    )
}
