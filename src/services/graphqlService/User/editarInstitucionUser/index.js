import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mutationEditarInstitucionUsuario = `mutation editarInstitucionUsuario($id: String, $institucion: String){
                                editarInstitucionUsuario(id: $id, institucion: $institucion){
                                _id
                                institucion	
                            }				
                        }`;

export default (_id,_institucion)=>{
                const variables = {
                    id:_id,
                    institucion:_institucion
                };
                return  apiRequest({mutationEditarInstitucionUsuario,variables})
                        .then(respuesta => respuesta.data.editarInstitucionUsuario)
                        .catch(error => error.errors);
                }