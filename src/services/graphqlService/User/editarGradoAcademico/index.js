import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mutationEditarGradoAcademicoUsuario = `mutation editarGradoAcademicoUsuario($id: String, $grado_academico: String){
                                                editarGradoAcademicoUsuario(id: $id, grado_academico: $grado_academico){
                                                _id
                                                grado_academico	
                                            }				
                                        }`;

export default (_id,_gradoAcademico)=>{
                const variables = {
                    id:_id,
                    grado_academico:_gradoAcademico
                };
                return  apiRequest({mutationEditarGradoAcademicoUsuario,variables})
                        .then(respuesta => respuesta.data.editarGradoAcademicoUsuario)
                        .catch(error => error.errors);
                }