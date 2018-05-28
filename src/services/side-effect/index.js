import {all} from 'redux-saga/effects';
import watcherAuthGithub from './Auth/github';
import watcherAuthGoogle from './Auth/google';
import watcherAuthTwitter from './Auth/twitter';
export default function* rootSaga(){
    yield all([
    watcherAuthGithub(),
    watcherAuthGoogle(),
    watcherAuthTwitter()
])};