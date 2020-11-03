import { takeEvery, call, put } from 'redux-saga/effects';
import {

} from './api'
import {
    GET_PRODUCT,
    SET_PRODUCT,
    getProduct,
    setProduct
} from '../Actions/actionType';




function* workerGetproduct(action) {
    try {
        const uri = 'api';
        // const result = yield call(api.get, uri);
        // yield put(getProduct(action.payload));
    }
    catch {
        console.log('failed')
    }
}

export function* watchGetProduct() {
    yield takeEvery(GET_PRODUCT, workerGetproduct);
}

