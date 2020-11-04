import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
import languageProviderReducer from '../components/LanguageProvider/reducer';

import product from '../containers/Pages/ProductsConfigration/Reducers/productReducer';
import priceItem from '../containers/Pages/ProductsConfigration/Reducers/PriceItemReducer';
import SalesTrans from '../containers/Pages/Sales/Reducers/salesReducers';
import earnComission from '../containers/Pages/Sales/Reducers/earnedCommiReducer';
import reseller from '../containers/Pages/Resellers/Reducers/resellerReducer';
import resellerGroupReducer from '../containers/Pages/Resellers/Reducers/resellerGroupReducer'
import ComissionReducer from '../containers/Pages/Comission/Reducers/comissionReducer';


export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
    product: product,
    priceItem: priceItem,
    SalesTrans: SalesTrans,
    earnComission: earnComission,
    reseller: reseller,
    resellerGroupReducer:resellerGroupReducer,
    ComissionReducer: ComissionReducer,
  });

  return rootReducer;
}
