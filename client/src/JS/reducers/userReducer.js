import { REGISTER_USER , LOGOUT_USER ,
    REGISTER_USER_FAILLURE ,
    REGISTER_USER_SUCCESS ,
     PROFILE_USER , 
     PROFILE_USER_FAILLURE ,
     PROFILE_USER_SUCCESS ,
     LOGIN_USER , LOGIN_USER_FAILLURE ,
     LOGIN_USER_SUCCESS ,
     CREATE_USER_PROFILE_FAILLURE , 
     CREATE_USER_PROFILE_SUCCESS ,
    CREATE_USER_PROFILE ,
    GET_USERS   ,
    GET_USERS_SUCCESS ,
    GET_USERS_FAILLURE ,
    GET_USER   ,
    GET_USER_SUCCESS ,
    GET_USER_FAILLURE  
    } from "../constants/actionsTypes";




const initialState ={
    isLoading : false ,
    error :[] ,
    user : null , 
    token : null ,
    profile :{},
    isAuth : false ,
    users : []

} ;
const userReducer = (state = initialState , {type , payload})=>{
    switch (type) {
            case   GET_USER :
            case   GET_USERS :
            case CREATE_USER_PROFILE:
            case PROFILE_USER :
            case LOGIN_USER :
            case REGISTER_USER :  return {...state , 
            isLoading : true 
            }
            case GET_USER_FAILLURE :
            case GET_USERS_FAILLURE :
            case CREATE_USER_PROFILE_FAILLURE :
            case PROFILE_USER_FAILLURE :
            case LOGIN_USER_FAILLURE :
            case REGISTER_USER_FAILLURE : return {...state , 
            isLoading :false , 
            error : payload
            }
           
            case REGISTER_USER_SUCCESS :  
            case LOGIN_USER_SUCCESS : return {...state, 
            isLoading:false ,
            token : payload
         }
        
         case CREATE_USER_PROFILE_SUCCESS:
         case PROFILE_USER_SUCCESS: return {
             ...state ,
             isLoading :false ,
             isAuth :true ,
             profile : payload 
         }
         case LOGOUT_USER:
            return {
              ...state,
              isLoading: false,
              user: null,
              isAuth: false,
              token: null,
            };
            case GET_USERS_SUCCESS :
                return {...state ,
                     isLoading : false ,
                 users : payload   }   
             case GET_USER_SUCCESS :
                return {...state ,
                isLoading : false ,
                user : payload   }

        default:
            return  state;
    }
}
export default userReducer ;