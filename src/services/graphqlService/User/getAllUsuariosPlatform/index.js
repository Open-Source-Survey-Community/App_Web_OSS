import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const listarTodosUsuarios = `query listarTodosUsuarios{
                                    listarTodosUsuarios{
                                    _id
                                    nombre	
                                    }				
                                }`;

export default ()=>{
                return  apiRequest({listarTodosUsuarios})
                        .then(respuesta => respuesta.data.listarTodosUsuarios)
                        .catch(error => error.errors);
                }