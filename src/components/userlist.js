import React from 'react';
//import { editUser } from '../actions';
import * as actions from '../actions'

//import users from '../reducers/users';
import User from './user';

//const deleteUser = (id) => {
//        this.clearData();
//        this.props.deleteUser(id)
 //   }

 

 const UserList = ({users, deleteUser, editUser}) => {
    console.log(users)
    let users1 = []

    users1 = users
    
   // this.users.forEach((user)=> {
   //     if(user.name.indexOf(onFilterTextChange) === -1){
   //         return
   //     }
   // })
    return (
      <table>
            <thead>
                <tr>
              <th>edit</th>
              <th>delete</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Sex</th>
         </tr> 
          </thead>

          {users1.map(user=> <User key={user.id} user={user} deleteUser={deleteUser} editUser={editUser}/>)}
      </table>
    )
  }
  
  export default UserList; 

// {this.users && this.users.map((data, index) => <User key={this.props.data.id} onClick={()=>this.editUser(data.id)} onClickD={()=>this.deleteUser(data.id)} 
//firstName={this.props.data.firstName} lastName={this.props.data.lastName} sex={this.props.data.sex} age={this.props.data.age} password={this.props.data.password} password2={this.props.data.password2}/>)}