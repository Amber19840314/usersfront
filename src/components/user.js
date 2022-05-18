import React  from 'react';

const UserList = ({user}) => {
   
    return(
        <tbody>
      <tr>
      <th><button>edit</button></th>
      <th><button>delete</button></th>
      <th >{user.firstName}</th>
      <th >{user.lastName}</th>
      <th >{user.age}</th>
      <th >{user.sex}</th>
   </tr> 
   </tbody>
     
    )
  }

export default UserList