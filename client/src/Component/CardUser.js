import React , {useEffect} from  'react' ;
import '../styles/ListeUser.css';
import { Link } from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux' ;
import {findUserByID } from '../JS/actions/adminActions' ;
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal' ;
export default function CardUser({user , match})  {
  const [modalShow, setModalShow] = React.useState(false);
  // const dispatch = useDispatch();
  // const getOneUser =() =>dispatch(findUserByID());
  // const onShow = ()=>{
  //   setModalShow(true);
 
  //   }
  //   useEffect(() => {
  //     getOneUser(match.params.id);
  //    }, []);
    return (
      <React.Fragment>
        <tbody>
        <tr>
          <td>
            <img src={user.avatar} alt="notfound" />
            <a href="#" className="user-link">{user.name} </a>
            <span className="user-subhead">{user.poste} </span>
          </td>
          <td>
            {user.createdAt}         
          </td>
          <td className="text-center">
          
            <span className="label label-default"></span>
          </td>
          <td>
            <a href="#">{user.email}</a>
          </td>
          <td style={{width: '20%'}}>
          <Link to={`/${user._id}`} className="table-link">
            {/* <a href="#" className="table-link"> */}
              <span className="fa-stack"  onClick={() => setModalShow(true) }>
                <i className="fa fa-square fa-stack-2x " />
                <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
              </span>
            {/* </a> */}
            </Link>
            <a href="#" className="table-link">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-pencil fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
              </span>
            </a>
          </td>
        </tr>
      </tbody>

      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          user={user}
        />
        </React.Fragment>
    )
}
