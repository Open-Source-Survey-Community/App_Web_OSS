import {reduxSagaFirebase, providerTwitter} from '../../../../firebase/firebase'
import {AUTHENICATED,AUTHENTICATING,AUTHERROR,SET_USER} from '../../../../actions/authentication/index'
import {put, call, takeLatest, take} from 'redux-saga/effects';
function* authTwitter (){
    try{
        yield put(AUTHENTICATING(true))
        yield call(reduxSagaFirebase.auth.signInWithPopup,providerTwitter)
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


export default function* watcherAuthTwitter(){
    yield takeLatest('TWITTER_LOGIN',authTwitter)    
}