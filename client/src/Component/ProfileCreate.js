import React ,{useState} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {Redirect} from 'react-router'
import {Form ,Col ,Button} from 'react-bootstrap'
import {  createProfile} from "../JS/actions/authActions";
export default function ProfileCreate() {
  const[role,setRole]=useState("");
  const isLoading = useSelector(state => state.userReducer.isLoading) ;
  const isAuth = useSelector(state => state.userReducer.isAuth) ;
  const token = useSelector(state => state.userReducer.token) ;
  const profile = useSelector(state=> state.userReducer.profile) ;
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  dispatch(createProfile(token ,{role})) };
  if(isLoading) return   <h1>please waiting ...</h1>
  if(isAuth) {
    if(profile.role === "admin"){ return <Redirect to ="/admin/" />}
    <Redirect to ="/profile-other" />
  } 


    return (
        <div className="all">
        <Form className="form-signin" onSubmit={onSubmit}>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Poste</Form.Label>
            <Form.Control as="select" custom onChange={(e)=>setRole(e.target.value)}>
              <option>admin</option>
              <option>user</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
    Submit
  </Button>
          </Form> 
        </div>
    )
}
