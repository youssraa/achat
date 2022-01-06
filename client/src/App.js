import React from 'react';
import Acceuil from './Component/Acceuil';
import ProfileAdmin from './Component/ProfileAdmin';
import ProfileOther from './Component/ProfileOther';
import ListeUser from './Component/ListeUser';
import ProfileCreate from './Component/ProfileCreate';
import FormUser from './Component/FormUser';
import Carte from './Component/Carte'
import MyVerticallyCenteredModal from './Component/MyVerticallyCenteredModal'
import { BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector} from 'react-redux';
import {Redirect } from 'react-router'
function App() {
  // const isAuth = useSelector(state => state.userReducer.isAuth)
  // {!isAuth ? <Redirect to ="/login"/> : <Redirect to ="/admin"/>}


  return (
   
    <Router>
 <Route path="/" exact component={Acceuil} /> 
   <Route path="/admin"  component={ProfileAdmin} /> 
{/* /admin/acceuil
<Route path="/admin/:name" exact  > <FormUser /> </Route>
{/* /admin/new-user */}
  {/* <Route path="/admin/:name" exact > <Carte/> </Route> 
  {/* /admin/liste-users */}
 {/* <Route path="/admin/liste-users" exact > <ListeUser/></Route>  */}
 {/* /admin/profile-create */}
 {/* <Route path="/admin/:name" exact component={ProfileCreate} /> */}
 {/* /admin/profile-other */}
   {/* <Route path="/admin/:name" exact component={ProfileOther} /> */} 
   <Route path="/:id" component={MyVerticallyCenteredModal}/>
</Router>
  );
}

export default App;
