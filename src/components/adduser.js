import React, { Component } from 'react';
//import PropTypes from 'prop-types'

let ID_SEED = 1

class AddUser extends Component {
    // this is a controlled component
    constructor(props) {
        super(props)
        this.state ={
            firstName: '',
            lastName: '',
            sex: '',
            age: '',
            password: '',
            password2: ''
       }
    }

    

    handleInput = e => {
        this.setState({input: e.target.value})
    }

    submit = e => {
        e.preventDefault()
        if (this.state.firstName && this.state.lastName && this.state.password && this.state.password2 && !this.state.id) {
            const newUser = {
                id: ID_SEED++,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                sex: this.state.sex,
                age: this.state.age,
                password: this.state.password,
                password2: this.state.password2,
            }

            this.props.addUser(newUser)
            //this.props.addUser(this.state.input)
           // this.setState({input: ''})

        } else if (this.state.firstName && this.state.lastName && this.state.password && this.state.password2 && this.state.id){
            const updatedUser = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            sex: this.state.sex,
            age: this.state.age,
            password: this.state.password,
            password2: this.state.password2,
        }
        this.props.editUser(updatedUser)
        }
        
    }

    editUser = (data) => {
        this.setState({
            id: data.id,
            firstName: data.firstName, 
            lastName: data.lastName,
            sex: data.sex,
            age: data.age,
            password: data.password,
            password2: data.password2
        })
    }

    handlefNameChange = e => {
        this.setState ({
            firstName: e.target.value
        })
    }
    
    handlelNameChange = e => {
        this.setState ({
            lastName: e.target.value
        })
    }

    handleSexChange = e => {
        this.setState ({
            sex: e.target.value
        })
    }

    handleAgeChange = e => {
        this.setState ({
            age: e.target.value
        })
    }

    handlePwChange = e => {
        this.setState ({
            password: e.target.value
        })
    }

    handlePw2Change = e => {
        this.setState ({
            password2: e.target.value
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <p>First Name: <input onChange={this.handlefNameChange} value={this.state.firstName} type='text' /></p>
                    <p>Last Name: <input onChange={this.handlelNameChange} value={this.state.lastName} type='text' /></p>
                    <p>Sex: <input onChange={this.handleSexChange} value={this.state.sex} type='text' /></p>
                    <p>Age: <input onChange={this.handleAgeChange} value={this.state.age} type='text' /></p>
                    <p>Password: <input onChange={this.handlePwChange} value={this.state.password} type='password' /></p>
                    <p>Repeat: <input onChange={this.handlePw2Change} value={this.state.password2} type='password' /></p>
                  
                    {this.state.id ? <button onClick={this.submit}>Update</button> : <button onClick={this.submit}>Create User</button>}
                </form>
            </div>
        )
    }
}

export default AddUser