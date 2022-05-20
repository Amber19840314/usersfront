
import * as actions from '../actions'

const searchR = (state='', {type, searchText}) => {
    //console.log('34'+ state)
    console.log(type)
    console.log(searchText)
    switch (type) {
        case actions.ACTION_SET_SEARCH: 

         //   this.users.forEach((user)=> {
         //          if(user.name.indexOf(onFilterTextChange) === -1){
          //               return action.search
          //          }
           //     })
           return state

        default:
            return state
    }
}

export default searchR