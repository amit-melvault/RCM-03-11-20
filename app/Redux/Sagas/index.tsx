import { fork, all } from 'redux-saga/effects'

import * as uiSaga from './sagaAll'


export function* rootSaga() {
    yield all([
        ...Object.values(uiSaga)
    ].map(fork));
}










// import { watchGetProduct} from './sagaAll';

// export default function* (){
//     yield[
//         watchGetProduct(),
//     ]
//     console.log('rootSagas')
// }