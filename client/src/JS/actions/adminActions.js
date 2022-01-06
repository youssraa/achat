import {   
    GET_USERS   ,
GET_USERS_SUCCESS ,
GET_USERS_FAILLURE  ,
GET_USER   ,
GET_USER_SUCCESS ,
GET_USER_FAILLURE  ,
} from "../constants/actionsTypes";
import axios from 'axios';
export const getListUsers =()=> async dispatch =>{
    dispatch({
        type : GET_USERS
    })
    try{
        const res= await axios.get("/user/list-users")
            dispatch({
                type : GET_USERS_SUCCESS ,
                payload : res.data ,
            })
        }
    catch (error) {
            dispatch({
                type : GET_USERS_FAILLURE ,
                payload:error.response.data 
            })    }

        }
export const findUserByID = (userId) => async (dispatch) => {
    dispatch({
        type : GET_USER
    })
            try {
              const res = await axios.get(`/user/${userId}`);
          
              dispatch({
                type:GET_USER_SUCCESS  ,
                payload: res.data,
              });
            } catch (error) {
                dispatch({
                    type : GET_USER_FAILLURE ,
                    payload:error.response.data 
                })    }
            }
               