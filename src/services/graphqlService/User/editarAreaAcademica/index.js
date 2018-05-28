import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mutationEditarAreaAcademica = `mutation editarAreaAcademica($id: String, $area_academica: String){
                                                editarAreaAcademica(id: $id, area_academica: $area_academica){
                                                _id
                                                area_academica	
                                            }				
                                        }`;

export default (_id,_areaAcademica)=>{
                const variables = {
                    id:_id,
                    area_academica:_areaAcademica
                };
                return  apiRequest({mutationEditarAreaAcademica,variables})
                        .then(respuesta => respuesta.data.editarAreaAcademica)
                        .catch(error => error.errors);
                }