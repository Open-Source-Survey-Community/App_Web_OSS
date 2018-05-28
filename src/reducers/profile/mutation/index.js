const myProfile = {
    _id: undefined,
    nombre: undefined,
    apellido: undefined,
    correo: undefined,
    urlImage: undefined,
    wiki: undefined,
    roles:[],
    institucion:undefined,
    grado_academico:undefined,
    area_academica:undefined,
    colaboradores:[],
    notificaciones:[],
    errors:[]
}


export default (state= myProfile,action)=>{
    switch (action.type){
        case 'GET_PROFILE_USER':
            return Object.assign({},state,action.myinformation);

        case 'SAVE_PROFILE_USER':

        case 'EDITAR_INSTITUCION_USER':

        case 'EDITAR_GRADO_ACADEMICO':

        case 'EDITAR_AREA_ACADEMICA':

        case 'ADD_WIKI':

        case 'EDITAR_NOMBRE_USUARIO':

        case 'EDITAR_APELLIDO_USUARIO':

        case 'ADD_IMAGE':

        case 'ERROR_PROFILE_USER':
            return Object.assign({},state,{errors:action.errors});


        default:
            return state
    }
};