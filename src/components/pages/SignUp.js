import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import Footer from '../Footer'


export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            email: '',
            password: ''
        })
        this.props.history.push('/logged-in');
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <form class="sign-up-form" onSubmit={this.onSubmit} action="/sign-up" method="POST">
                        <div><h3>Sign Up</h3></div>
                        <input
                            type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            required
                        />
                        <input
                            type='text'
                            placeholder='Email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            required
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            required
                        />
                        <input type='submit' class='btn btn-danger btn-block' value='Submit' />
                    </form>
                </div>
                <Footer />
            </>
        )
    }
}

