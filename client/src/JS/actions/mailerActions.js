import {SEND_MESSAGE ,
     SEND_MESSAGE_FAILLURE,
     SEND_MESSAGE_SUCCESS}from "../constants/actionsTypes";
import axios from 'axios';     
export const  sendMsg =({namec,emailc,messagec})=>async dispatch =>{
    dispatch({
        type : SEND_MESSAGE
    })
        try {
            const {data} =await  axios.post('/' , {namec, emailc,messagec})
            dispatch({
                type : SEND_MESSAGE_SUCCESS,
                payload : data 
            })
            
        } catch (error) {
            dispatch({
                type : SEND_MESSAGE_FAILLURE , 
                payload:error.response.data 
            })

            
        }
  
}
