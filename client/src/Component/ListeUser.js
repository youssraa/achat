import React , {useEffect} from 'react'
import '../styles/ListeUser.css';
import CardUser from './CardUser' ;
import {useSelector , useDispatch} from 'react-redux' ;
import { getListUsers} from '../JS/actions/adminActions' ;


export default function ListeUser() {
  const {users , isLoading}= useSelector(state => state.userReducer)
  const dispatch = useDispatch();
const getAllUsers =() =>dispatch(getListUsers());
useEffect(() => {
  
  getAllUsers();
} , []);
    return (        
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th><span>User</span></th>
                      <th><span>Created</span></th>
                      <th className="text-center"><span>Status</span></th>
                      <th><span>Email</span></th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  {users.map((user , i ) => <CardUser key={user._id} user={user}/> )}  
  
                </table>            
          </div>
        </div>
    </div>
    </div>
    )
}
