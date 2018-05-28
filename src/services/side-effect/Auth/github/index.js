import {reduxSagaFirebase, providerGithub} from '../../../../firebase/firebase'
import {AUTHENICATED,AUTHENTICATING,AUTHERROR,SET_USER} from '../../../../actions/authentication/index'
import {put, call, takeLatest, take} from 'redux-saga/effects';

function* authGithub (){
    try{
        console.log('error');
        yield put(AUTHENTICATING(true))
        yield call(reduxSagaFirebase.auth.signInWithPopup,providerGithub)
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

export default function* watcherAuthGithub(){
    yield takeLatest('GITHUB_LOGIN',authGithub)    
}

