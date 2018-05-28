import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mutationEditarApellido = `mutation editarApellido($id: String, $apellido: String){
                                                editarApellido(id: $id, apellido: $apellido){
                                                _id
                                                apellido
                                            }				
                                        }`;

export default (_id,_apellido)=>{
                const variables = {
                    id:_id,
                    apellido:_apellido
                };
                return  apiRequest({mutationEditarApellido,variables})
                        .then(respuesta => respuesta.data.editarApellido)
                        .catch(error => error.errors);
                }