import React  from 'react'
import '../styles/ProfileAdmin.css'
import {useDispatch , useSelector} from 'react-redux';
import {Redirect } from 'react-router';
import Navebar from './Navebar';
import SideBare from './SideBare';

import { 
    Switch,
    Route
  } from "react-router-dom";
  

export default function ProfileAdmin() {


    return (
        // <div className="backg" >
<>        

 <Navebar />  
<SideBare  /> 

  </>
    )
  
}
