import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default class SignUpOrganizer extends Component {
    constructor() {
        super()
        this.state = {
            organizerName: '',
            email: '',
            phoneNumber: '',
            password: ''
        }
        this.changeOrgName = this.changeOrgName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeOrgName(event) {
        this.setState({
            organizerName: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePhone(event) {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        console.log(this.state.organizerName);
        const registered = {
            organizerName: this.state.organizerName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password
        }
        axios.post('http://localhost:5000/orgs/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            organizerName: '',
            email: '',
            phoneNumber: '',
            password: ''
        })
        this.props.history.push('/logged-org');
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <form class="sign-up-form" onSubmit={this.onSubmit} action="/sign-up-organizer" method="POST">
                        <div><h3>Sign Up as Organizer</h3></div>
                        <input
                            type='text'
                            placeholder='Organizer Name'
                            onChange={this.changeOrgName}
                            value={this.state.organizerName}
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
                            type='text'
                            placeholder='Phone'
                            onChange={this.changePhone}
                            value={this.state.phoneNumber}
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