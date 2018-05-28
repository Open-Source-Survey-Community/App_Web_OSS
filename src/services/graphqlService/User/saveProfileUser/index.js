import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mutationCrearUsuario = `mutation crearUsuario($correo: String!, $nombre: String,
                                                    $urlImage: String, $rol: String, $acciones: String){
                                        crearUsuario(correo: $correo,nombre: $nombre, urlImage: $urlImage,
                                                    rol: $rol, acciones: $acciones){
                                                _id
                                                correo
                                                nombre	
                                }				
                            }`;

export default (profileUser)=>{
   return  apiRequest({mutationCrearUsuario,profileUser})
                .then(respuesta => respuesta.data.crearUsuario)
                .catch(error => error.errors);
}

