import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const listaUsuariosbyName = `query listaUsuariosByName($nombre: String){
                                    listaUsuariosByName(nombre: $nombre){
                                        nombre	
                                    }				
                            }`;

export default (_nombre)=>{
                const variables = {
                    nombre: _nombre
                }
                return  apiRequest({listaUsuariosbyName,variables})
                        .then(respuesta => respuesta.data.listaUsuariosbyName)
                        .catch(error => error.errors);
                }