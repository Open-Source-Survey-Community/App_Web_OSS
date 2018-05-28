import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mostrarPerfilUsuario = `query mostrarPerfilUsuario($id: String){
                                    mostrarPerfilUsuario(id: $id){
                                        nombre	
                                    }				
                            }`;

export default (_id)=>{
                const variables = {
                    id: _id
                }
                return  apiRequest({mostrarPerfilUsuario,variables})
                        .then(respuesta => respuesta.data.mostrarPerfilUsuario)
                        .catch(error => error.errors);
                }