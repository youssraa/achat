import React ,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {Redirect} from 'react-router'
import  {getProfile} from '../JS/actions/authActions'
export default function ProfileOther() {
    const isLoading = useSelector(state => state.userReducer.isLoading) ;
    const isAuth = useSelector(state => state.userReducer.isAuth) ;
    const token = useSelector(state => state.userReducer.token) ;
    const profile = useSelector(state=> state.userReducer.profile) ;
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getProfile(token))
    },[token , dispatch ])
    if(isLoading) return   <h1>please waiting ...</h1>
  //  if(!isAuth) return <Redirect to ="/profile-create" />

    return (
        <div>
<h1>hello</h1>
        </div>
    )
}
