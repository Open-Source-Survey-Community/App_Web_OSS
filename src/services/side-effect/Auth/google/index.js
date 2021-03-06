import {reduxSagaFirebase, providerGoogle} from '../../../../firebase/firebase'
import {AUTHENICATED,AUTHENTICATING,AUTHERROR,SET_USER} from '../../../../actions/authentication/index'
import {put, call, takeLatest, take} from 'redux-saga/effects';
function* authGoogle (){
    try{
        yield put(AUTHENTICATING(true))
        yield call(reduxSagaFirebase.auth.signInWithPopup,providerGoogle)
        const channel = yield call(reduxSagaFirebase.auth.channel)
        const { user } = yield take(channel)
        yield put(SET_USER(user.email,user.photoURL,user.displayName))
        yield put(AUTHENICATED(true))
        yield put(AUTHENTICATING(false))
    }
    catch(error){
        yield put(AUTHERROR(error,500));
    }
}


export default function* watcherAuthGoogle(){
    yield takeLatest('GOOGLE_LOGIN',authGoogle)    
}