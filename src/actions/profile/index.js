
export const GET_PROFILE_USER = (myinformation)=>({
    type: 'GET_PROFILE_USER',
    myinformation
});

export const SAVE_PROFILE_USER = (profileUser)=>({
    type: 'SAVE_PROFILE_USER',
    profileUser
});

export const EDITAR_INSTITUCION_USER = (id,institucion)=>({
    type: 'EDITAR_INSTITUCION_USER',
    id,
    institucion
});

export const EDITAR_GRADO_ACADEMICO = (id, gradoAcademico)=>({
    type: 'EDITAR_GRADO_ACADEMICO',
    id,
    gradoAcademico
});

export const EDITAR_AREA_ACADEMICA = (id, areaAcademica) => ({
    type: 'EDITAR_AREA_ACADEMICA',
    id,
    areaAcademica
});

export const ADD_WIKI = (id, wiki) => ({
    type: 'ADD_WIKI',
    id,
    wiki
});

export const EDITAR_NOMBRE_USUARIO = (id,nombre)=>({
    type: 'EDITAR_NOMBRE_USUARIO',
    id,
    nombre
});

export const EDITAR_APELLIDO_USUARIO = (id,apellido)=>({
    type: 'EDITAR_APELLIDO_USUARIO',
    id,
    apellido
});

export const ADD_IMAGE = (id, urlImage)=>({
    type:'ADD_IMAGE',
    id,
    urlImage
});

export const LISTA_USUARIOS = (nombre,listUsuariosPlatform=[])=>({
    type: 'LISTA_USUARIOS',
    listUsuariosPlatform
})

export const ERROR_PROFILE_USER = (errors)=>({
    type: 'ERROR_PROFILE_USER',
    errors
});

