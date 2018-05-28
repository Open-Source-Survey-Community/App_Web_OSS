export const SET_USER = (email='',photoURL='',displayName='') => ({
    type: 'SET_USER',
    email,
    photoURL,
    displayName
});

export const GET_USER = () => ({
    type: 'GET_USER'
});

export const AUTHENICATED = (isAuthenticated=false) =>({
    type: 'AUTHENTICATED',
    isAuthenticated
});

export const AUTHERROR = (error='',status=0)=>({
    type: 'AUTHERROR',
    error,
    status
});

export const LOGOUT = (correo='')=>({
    type: 'LOGOUT',
    correo
});

export const AUTHENTICATING = (isAuthenticating)=>({
    type: 'AUTHENTICATING',
    isAuthenticating
});

export const GOOGLE_LOGIN=()=>({
    type: 'GOOGLE_LOGIN'
})

export const GITHUB_LOGIN = ()=>({
    type: 'GITHUB_LOGIN'
})

export const TWITTER_LOGIN = ()=>({
    type: 'TWITTER_LOGIN'
})

export const RESET_ERROR = () => ({
    type: 'RESET_ERROR'
});
