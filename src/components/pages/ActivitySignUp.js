import React, { Component } from 'react'
import axios from 'axios'


export default class ActivitySignUp extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            phoneNumber: '',
            numOfPeople: ''
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changePhoneNumber = this.changePhoneNumber.bind(this)
        this.changeNumOfPeople = this.changeNumOfPeople.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }

    changePhoneNumber(event) {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    changeNumOfPeople(event) {
        this.setState({
            numOfPeople: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            phoneNumber: this.state.email,
            numOfPeople: this.state.password
        }
        axios.post('http://localhost:5000/app/activitysignup', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            phoneNumber: '',
            numOfPeople: ''
        })

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <form class="activitySignUp" onSubmit={this.onSubmit}>
                    <div><h3>Sign up for the activity</h3></div>
                    <input
                        type='text'
                        placeholder='Full Name'
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                        className='form-control form-group'
                    />
                    <input
                        type='text'
                        placeholder='Phone Number'
                        onChange={this.changePhoneNumber}
                        value={this.state.phoneNumber}
                        className='form-control form-group'
                    />
                    <input
                        type='text'
                        placeholder='Number of People'
                        onChange={this.changeNumOfPeople}
                        value={this.state.numOfPeople}
                        className='form-control form-group'
                    />
                    <input type='submit' class='btn btn-danger btn-block' value='Submit' />
                </form>
            </div>
        )
    }
}