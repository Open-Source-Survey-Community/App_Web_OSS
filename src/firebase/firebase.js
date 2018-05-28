import firebase from 'firebase';
import config from './config';
import ReduxSagaFirebase from 'redux-saga-firebase'

const myFireBaseConfiguration = firebase.initializeApp(config);

export const providerGoogle = new firebase.auth.GoogleAuthProvider();

export const providerGithub = new firebase.auth.GithubAuthProvider();

export const providerTwitter = new firebase.auth.TwitterAuthProvider();

export const reduxSagaFirebase = new ReduxSagaFirebase(myFireBaseConfiguration);

export const authFirebase = myFireBaseConfiguration.auth();


