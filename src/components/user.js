import React  from 'react';

const User = ({user,deleteUser,editUser}) => {
   
    return(

        <tbody>
      <tr>
      <th><button onClick={()=>editUser(user)}>edit</button></th>
      <th><button onClick={()=>deleteUser(user.id)}>delete</button></th>
      <th >{user.firstName}</th>
      <th >{user.lastName}</th>
      <th >{user.age}</th>
      <th >{user.sex}</th>
   </tr> 
   </tbody>
     
    )
  }

export default User