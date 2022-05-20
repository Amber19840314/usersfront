
const ACTION_ADDUSER = 'ADD_USER'
const ACTION_EDIT_USER = "EDIT_USER"
const ACTION_SET_SEARCH = 'SET_SEARCH'
const ACTION_DELETE_USER = 'DELETE_USER'


let addUser = (user) => {
    return { type: ACTION_ADDUSER, user:user}
}

let editUser = (user) => {
    console.log(1)
    return { type: ACTION_EDIT_USER, user:user}
}

let setSearch = (searchText) => {
    return {type: ACTION_SET_SEARCH, searchText: searchText}
}

let deleteUser = (id) => {
    return {type: ACTION_DELETE_USER, id:id}
}

export {ACTION_ADDUSER, ACTION_SET_SEARCH, ACTION_DELETE_USER, ACTION_EDIT_USER,editUser,addUser, setSearch, deleteUser}