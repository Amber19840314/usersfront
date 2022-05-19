import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './actions'

import AddUser from './components/adduser'
import UserList from './components/userlist'
import Search from './components/search'

//let id_seed = 3

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {todos: [
  //     {id: 0, text: 'todo 1', completed: false},
  //     {id: 1, text: 'todo 2', completed: false},
  //     {id: 2, text: 'todo 3', completed: true}
  //   ], filter: 'all'};
  // }

  // addTodo = todo => {
  //   console.log('addTodo', todo)
  //   let new_todo = {id: id_seed++, text: todo, completed: false}
  //   this.setState( {todos: [...this.state.todos, new_todo], filter: this.state.filter})
  // }

  // toggleTodo = i => {
  //   console.log(i)
  //   let newtodo = [...this.state.todos]
  //   newtodo[i].completed = !newtodo[i].completed
  //   this.setState( {todos: newtodo, filter: this.state.filter})  
  // }

  // setFilter = filterValue => {
  //   console.log(filterValue)
  //   this.setState( {todos: [...this.state.todos], filter: filterValue})
  // }

  componentDidMount(){

  }

deleteUser = (id) => {
  this.props.deleteUser(id)
}

editUser = (user) => {
  this.setState({
    id:user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    sex: user.sex,
    age: user.age,
    password: user.password,
    password2: user.password2
  })
}
  render() {
    return (
      <div className="App">
        <h2>User List</h2>
        <AddUser addUser={this.props.addUser}/>
        <UserList users={this.props.users} search={this.props.search} editUser={this.props.editUser} deleteUser={this.props.deleteUser}/>
        <Search currentValue={this.props.search} setSearch={this.props.setSearch}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    search: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearch: search => {
      dispatch({type: actions.ACTION_SET_SEARCH, search: search})
    },

   addUser: user => {
     dispatch({type: actions.ACTION_ADDUSER, user:user})
   },
    editUser: user  => {
      dispatch({type: actions.ACTION_EDIT_USER, user:user})
    },

    deleteUser: id  => {
      dispatch({type: actions.ACTION_DELETE_USER, id: id})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
