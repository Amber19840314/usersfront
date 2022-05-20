

import * as actions from '../actions'
let ID_SEED = 4

const inistUser = [
   
 {id: 1, firstName: 'Joh', lastName: 'Sun', sex: 'male', age: 45, password: '123', password2: '123'},
{id: 2, firstName: 'Jon', lastName: 'Sun', sex: 'male', age: 45, password: '123', password2: '123'},
{id: 3, firstName: 'Jhn', lastName: 'Sun', sex: 'male', age: 45, password: '123', password2: '123'}
    
   
]

const users = (state = inistUser, action) => {
    //console.log(this.state.users)
    //console.log(action)
    switch (action.type) {
        case actions.ACTION_ADDUSER: 
            return [
                ...state,
                
                  {    id: ID_SEED ++, 
                      firstName: action.user.firstName, 
                      lastName: action.user.firstName,
                      sex:action.user.sex,
                      age:action.user.age,
                      password:action.user.password,
                      password2:action.user.password2
                  }
                   
            ]
        case actions.ACTION_EDIT_USER:
        console.log(action.user.firstName)
         return  [{

                     
                     firstName: action.user.firstName, 
                      lastName: action.user.firstName,
                      sex:action.user.sex,
                      age:action.user.age,
                      password:action.user.password,
                      password2:action.user.password2
                 
                 }]


               
        case actions.ACTION_DELETE_USER: 
        console.log(action)

            return [
                  ...state.filter(user => user.id !== action.id)
            ]
              
            
            
        default:
            return state
    }
}

export default users