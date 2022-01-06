import { REGISTER_USER , LOGOUT_USER ,
    REGISTER_USER_FAILLURE ,
    REGISTER_USER_SUCCESS ,
     PROFILE_USER , 
     PROFILE_USER_FAILLURE ,
     PROFILE_USER_SUCCESS ,
 CREATE_USER_PROFILE_FAILLURE , 
 CREATE_USER_PROFILE_SUCCESS ,
CREATE_USER_PROFILE , 
    } from "../constants/actionsTypes";
import { LOGIN_USER , LOGIN_USER_FAILLURE ,LOGIN_USER_SUCCESS} from "../constants/actionsTypes";
import axios from 'axios';
export const  register =({name,email,password,genre,poste,avatar})=>async dispatch =>{
    dispatch({
        type : REGISTER_USER
    })
        try {
            const {data} =await  axios.post("admin/register" , {name, email,password,genre,poste,avatar})
            dispatch({
                type : REGISTER_USER_SUCCESS ,
                payload : data 
            })
            
        } catch (error) {
            dispatch({
                type : REGISTER_USER_FAILLURE ,
                payload:error.response.data 
            })

            
        }
  
}
export const  login=({email,password})=>async dispatch =>{
    dispatch({
        type : LOGIN_USER
    })
    try {
       
     const {data} = await axios.post('user/login',{email,password})
            dispatch({
                type : LOGIN_USER_SUCCESS ,
                payload : data.token
        })
        
    }
     catch (error) {
        dispatch({
            type :LOGIN_USER_FAILLURE ,
            payload : error.response.data ,
      
        })
        
    }
    

}
export const getProfile =(token)=>async dispatch =>{
dispatch ({
    type : PROFILE_USER })
    try {
        const  config = {
            headers: {
                Authorization : token 
            }
        }
         const {data} = await  axios.get('profile/me' , config)
    dispatch ({
    type : PROFILE_USER_SUCCESS ,
    payload : data 
    })
  
    } catch (error) {
        dispatch({
            type :PROFILE_USER_FAILLURE ,
            payload : error.response.data
        }) 
    }

}

export const  createProfile =(token ,
    {role })=>
    async dispatch =>{
    dispatch({
        type : CREATE_USER_PROFILE
    })
        try {
            const  config = {
                headers: {
                    Authorization : token 
                }
            }
            const {data} =await  axios.post('profile/form' ,{role } ,config )
            dispatch({
                type : CREATE_USER_PROFILE_SUCCESS ,
                payload : data 
            })
            
        } catch (error) {
            dispatch({
                type : CREATE_USER_PROFILE_FAILLURE ,
                payload:error.response.data 
            })

            
        }
  
}
export const logout = () => async (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  };