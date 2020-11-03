import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../utils/history';
import languageProviderReducer from '../../components/LanguageProvider/reducer';

import product from './productReducer';
import priceItem from './PriceItemReducer';
import SalesTrans from './salesReducers';
import earnComission from './earnedCommiReducer';
import reseller from './resellerReducer';
import resellerGroupReducer from './resellerGroupReducer'
import ComissionReducer from './comissionReducer';


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
