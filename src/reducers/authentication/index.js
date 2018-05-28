const authenticationUser = {
    name:undefined,
    email:undefined,
    urlImage: undefined,
    isAuthenticated: false,
    isAuthenticating: false,
    socialMedia:undefined,
    description_error:{
        error: '',
        status: 0
    }
}

export default (state= authenticationUser, action)=>{
    switch(action.type){
        case 'SET_USER':
            return Object.assign({},state,{name:action.displayName,email: action.email,urlImage:action.photoURL});

        case 'AUTHENTICATED':
            return Object.assign({},state,{isAuthenticated:action.isAuthenticated,description_error:{error:'', status:0}})

        case 'AUTHERROR':
            return Object.assign({},state,{description_error:{error:action.error.code, status:action.status}});
        case 'LOGOUT':
            return Object.assign({},state,authenticationUser)
        case 'AUTHENTICATING':
            return Object.assign({},state,{isAuthenticating:action.isAuthenticating})
        case 'GITHUB_LOGIN':
            return Object.assign({},state,{socialMedia:'GITHUB'})
        case 'GOOGLE_LOGIN':
            return Object.assign({},state,{socialMedia:'GOOGLE'})
        case 'TWITTER_LOGIN':
            return Object.assign({},state,{socialMedia:'TWITTER'})
        case 'GET_USER':
            return state
        case 'RESET_ERROR':
            return Object.assign({},state,{description_error:{error:'', status:0}});
        default:
            return state
    }
}