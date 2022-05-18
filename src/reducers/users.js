
import * as actions from '../actions'
let ID_SEED = 4

const inistUser = [{id: 1, firstName: 'John', lastName: 'Sun', sex: 'male', age: 45, password: '123', password2: '123'}]
const users = (state = [{id: 1, firstName: 'John', lastName: 'Sun', sex: 'male', age: 45, password: '123', password2: '123'}], action) => {
    //console.log(this.state.users)
    //console.log(action)
    switch (action.type) {
        case actions.ACTION_ADDUSER: 
            return [
                ...state,
                { 
                    id:ID_SEED++,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    sex: action.sex,
                    age: action.age,
                    password: action.password,
                    password2: action.password2,
                    user:action.user
                }
                
            ]
        case actions.ACTION_EDIT_USER:
            return state.map(user => {
                        if (user.id !== action.id) {
                            return user
                        }
                        else {
                            return {
                                ...user,
                                user: action.user
                            }
                        }
                    }
                )
        case action.ACTION_DELETE_USER: 
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}

export default users