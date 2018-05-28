import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mutationAddImage = `mutation addImage($id: String, $imagen: String){
                                  addImage(id: $id, imagen: $imagen){
                                                _id
                                                urlImage
                                            }				
                                        }`;

export default (_id,_imagen)=>{
                const variables = {
                    id:_id,
                    imagen:_imagen
                };
                return  apiRequest({mutationAddImage,variables})
                        .then(respuesta => respuesta.data.addImage)
                        .catch(error => error.errors);
                }