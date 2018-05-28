import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mutationEditarNombreUsuario = `mutation editarNombreUsuario($id: String, $nombre: String){
                                editarNombreUsuario(id: $id, nombre: $nombre){
                                _id
                                nombre	
                            }				
                        }`;

export default (_id,_nombre)=>{
                const variables = {
                    'id':_id,
                    'nombre':_nombre
                };
                return  apiRequest({mutationEditarNombreUsuario,variables})
                        .then(respuesta => respuesta.data.editarNombreUsuario)
                        .catch(error => error.errors);
                }