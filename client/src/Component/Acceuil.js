import React , {useState} from 'react'
import '../styles/Acceuil.css';
import { Redirect } from 'react-router';
import { login } from '../JS/actions/authActions';
import {useSelector,useDispatch} from 'react-redux' ;
import {Form , Button, Col , Row} from 'react-bootstrap'
export default function Acceuil() {
  const [email ,setEmail]= useState("");
  const [password , setPassword]=useState("") ;
  const dispatch = useDispatch();
  const token = useSelector(state => state.userReducer.token)
  const isLoading = useSelector(state => state.userReducer.isLoading)
  const isAuth = useSelector(state => state.userReducer.isAuth)
  if(isLoading) return <h1>pleasewaiting ...</h1>
  if (token) { 
 return <Redirect to="/profile-other" /> }
const onSubmit = (e) => {
  e.preventDefault();
  dispatch(login({email ,password})) ;
}
    return (
        <div className="all">
           <Form className="form-signin" onSubmit={onSubmit}>
           <Row>
           <Col>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="label-sign" >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      Indentifiez-vous si vous etes un membre de la societer
    </Form.Text>
  </Form.Group>
  </Col>
<Col>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="label-sign" >Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  </Col>
  </Row>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
