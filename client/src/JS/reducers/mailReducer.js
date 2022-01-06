import {SEND_MESSAGE ,
    SEND_MESSAGE_FAILLURE,
    SEND_MESSAGE_SUCCESS}from "../constants/actionsTypes";
    const initialState ={
        isLoading : false ,
        error :[] ,
        msg : null ,
    
    } ;
    const mailReducer = (state = initialState , {type , payload}) =>{
        switch(type){
            case SEND_MESSAGE : return {...state ,
                 isLoading : true } 
            case SEND_MESSAGE_SUCCESS : return {...state , 
                isLoading : false ,
                msg : "your message has been send it" ,

            }
            case SEND_MESSAGE_FAILLURE : return {...state , 
                isLoading : false ,
                msg : "try a gain please " ,
                 error:payload 

            }
            default:
             return  state;

        }
    }
    export default mailReducer ;