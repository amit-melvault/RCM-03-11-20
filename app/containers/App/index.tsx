import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import GlobalStyle from '../../global-styles';
import NotFoundPage from '../NotFoundPage/Loadable';
import Navbar from '../../components/Navbar';
import Dashboard from '../Pages/Dashboard'
import EarnedComission from '../Pages/Sales/EarnedComission';
import Sales from '../Pages/Sales/SalesTransection';
import Reseller from '../Pages/Resellers/Reseller'
import ResellerGroup from '../Pages/Resellers/Resellergroup';
import Products from '../Pages/ProductsConfigration/Products';
import Comission from '../Pages/Comission';
import Athentication from '../Pages/Athentication';

import AddProduct from '../../containers/Pages/ProductsConfigration/AddProduct';
import PriceItemType from '../../containers/Pages/ProductsConfigration/PriceItemType';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/earned-comission" component={EarnedComission} />
          <Route exact path="/sales-transection" component={Sales} />
          <Route exact path="/reseller" component={Reseller} />
          <Route exact path="/reseller-group" component={ResellerGroup} />
          <Route exact path="/product-configration/product" component={Products} />
          <Route exact path="/product-configration/price-item" component={PriceItemType} />
          <Route exact path="/product-configration/add" component={AddProduct} />
          <Route exact path="/comission" component={Comission} />
          <Route exact path="/athentication" component={Athentication} />
          <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
export default hot(App);
