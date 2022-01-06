import React , { useState } from    'react'
import '../styles/SideBare.css'
import { Link, Redirect ,useRouteMatch } from "react-router-dom";
import Carte from './Carte'
import ListeUser from './ListeUser'
import FormUser from './FormUser'
export default function SideBare() {
  const [showList , setShowList] = useState(false) ;
  const [showNewEmp , setShowNewEmp] = useState(false) ;
  const [showAll , setShowAll] = useState(false) ;
  const ListEmp = (e) => {
    e.preventDefault();
    setShowAll(true);
    setShowNewEmp(false) ;
    setShowList(false) ;
    } 
    const NotShow = (e) => {
      setShowList(false);
      setShowNewEmp(false) ; 
      setShowList(false) ;  
    }
  const  Accueil = (e) => {
      setShowList(true);
      setShowNewEmp(false) ; 
      setShowAll(false) ; 
      } 
      const NewEmp = (e) =>{
      setShowList(false);
      setShowNewEmp(true) ;
      setShowAll(false); 
      } 
    return (
      <React.Fragment>
        <nav className="main-menu" id="side-ba">
        <ul>
          <li onClick={Accueil}>
          <Link to="/admin/acceuil">
               <i className="fa fa-home fa-2x" />
                 <span className="nav-text">
                   Acceuil
               </span>  
               </Link>        
            </li>
            <li className="has-subnav" onClick={NewEmp}>
            {/* <a href="/admin">  */}
            <Link to="/admin">
                <i className="fa fa-laptop fa-2x" />
                <span className="nav-text">
                  nouvel session
                </span>
                {/* </a> */}
                </Link>
            </li>
            <li className="has-subnav" onClick={ListEmp}>
            <Link to="/admin/liste-users">
                <i className="fa fa-list fa-2x" />
                <span className="nav-text">
                  Liste user
                </span>
          </Link>
            </li>
            <li className="has-subnav">
            {/* <a href="/admin"> */}
                <i className="fa fa-folder-open fa-2x" />
                <span className="nav-text">
                  Reçu
                </span>
                {/* </a> */}
            </li>
            <li>
              {/* <a href="/"> */}
                <i className="fa fa-bar-chart-o fa-2x" />
                <span className="nav-text">
                  Graphs and Statistics
                </span>
              {/* </a> */}
            </li>
            <li>
              {/* <a href="/"> */}
                <i className="fa fa-font fa-2x" />
                <span className="nav-text">
                  Quotes
                </span>
              {/* </a> */}
            </li>
            <li>
              {/* <a href="m"> */}
                <i className="fa fa-table fa-2x" />
                <span className="nav-text">
                  Tous Demandes
                </span>
              {/* </a> */}
            </li>
            <li>
              {/* <a href="m"> */}
                <i className="fa fa-map-marker fa-2x" />
                <span className="nav-text">
                  Maps
                </span>
              {/* </a> */}
            </li>
            <li>
              {/* <a href="/"> */}
                <i className="fa fa-info fa-2x" />
                <span className="nav-text">
                  Notification
                </span>
                
              {/* </a> */}
            </li>
          </ul>
          <ul className="logout">
            <li>
              {/* <a href="/"> */}
                <i className="fa fa-power-off fa-2x" />
                <span className="nav-text">
                  Logout
                </span>
              {/* </a> */}
            </li>  
          </ul>
        </nav> 
        
        <div className="contenu" >
       { showNewEmp ? <FormUser /> : Accueil } 
      { showList ? <Carte /> : Accueil }  
      { showAll ? <ListeUser/> : Accueil } 

     </div> 
     </React.Fragment>
    )
}
