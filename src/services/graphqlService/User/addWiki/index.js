import {URL_DEVELOPMENT} from '../../../ENVIRONMENT_SERVICES/index';
import { createApolloFetch } from 'apollo-fetch';

const apiRequest = createApolloFetch({URL_DEVELOPMENT});

const mutationAddWiki = `mutation addWiki($id: String, $wiki: String){
                                  addWiki(id: $id, wiki: $wiki){
                                                _id
                                                wiki
                                            }				
                                        }`;

export default (_id,_wiki)=>{
                const variables = {
                    id:_id,
                    wiki:_wiki
                };
                return  apiRequest({mutationAddWiki,variables})
                        .then(respuesta => respuesta.data.addWiki)
                        .catch(error => error.errors);
                }