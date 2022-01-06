import React from 'react'
import FormUser from './FormUser' ;
import Carte from './Carte' ; 
import ListeUser from './ListeUser' ; 
export const ContenuAdmin = () => {
    const Contenu = [
        {
        name : "acceuil " ,
        content : <FormUser /> 
        } ,
        {
        name : "new-user " ,
        content : <Carte /> 
        } ,
        {
        name : "liste-users" ,
        content : <ListeUser/>  
        } ,    
    ]
    return (
        <div>
            
        </div>
    )
}
