const listaUsuariosPlatform = []

export default (state= listaUsuariosPlatform,action)=>{
    switch (action.type){
        case 'LISTA_USUARIOS':
            return Object.assign({},state,action.listUsuariosPlatform);
        
        default:
            return state
    }
};