import React ,{useState} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {Redirect} from 'react-router'
import {Form ,Col ,Row,Button } from 'react-bootstrap' ;
import {register } from '../JS/actions/authActions'
import '../styles/FormUser.css'
export default function FormUser() {
  const [email , setEmail]=useState("");
  const [password , setPassword]=useState("");
  const [avatar ,setAvatar]=useState("");
  const [poste , setPoste]=useState("");
  const [name , setName]=useState("");
  const [genre , setGenre]=useState("");
  const isLoading = useSelector(state => state.userReducer.isLoading) ;
  const isAuth = useSelector(state => state.userReducer.isAuth) ;
  const token = useSelector(state => state.userReducer.token) ;
  const profile = useSelector(state=> state.userReducer.profile) ;
  const dispatch = useDispatch();
  const PosteAv =(e) => {
    setPoste(e.target.value)  ;
    if( poste ==="Service achat"){ 
      setAvatar("/avatar/serviceAch.png")
     }
     if( poste ==="Gérant"){ 
      setAvatar("/avatar/pdg.png")
     }
     if(poste === "Controleur de gestion"){ 
      setAvatar("/avatar/pdg.png")
     }
    if(( poste ==="Responsable CC") && (genre ==="Femme")){
           setAvatar("/avatar/femme.png") }
         else {
         if ( genre ==="Homme"){
           setAvatar("/avatar/respm.png") }
    }
  
  
  }
  const onSubmit = (e) => {
    e.preventDefault();
  dispatch(register({email ,password  , poste ,name , genre  ,avatar })) }
    return (
        <div className="form-us">
        <Form  onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nom complet </Form.Label>
            <Form.Control type="text" placeholder="Saisir le nom avec lettre majuscule au début" onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Poste</Form.Label>
            <Form.Select aria-label="saissir poste"  onChange={PosteAv}>
            <option value="Controleur de gestion">Controleur de gestion</option>
              <option value="Gérant">Gérant</option>
              <option value="Responsable CC">Responsable CC</option>
              <option value="Service achat">Service d'achat</option>
           </Form.Select>           
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <fieldset>
                  <Form.Group as={Col} >
                    <Form.Label as="legend" column sm={2}>
                      Genre
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Femme"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick={(e)=>setGenre("Homme")}
                      
                      />
                      <Form.Check
                        type="radio"
                        label="Homme"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick={(e)=>setGenre("Homme")}
                   
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
        </Row>
      
      
        <Button variant="primary" type="submit" >
        Ajouter
</Button>         
      </Form>
      </div>
    )
}
