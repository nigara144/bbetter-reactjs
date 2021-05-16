import React, { Component } from 'react'
import axios from 'axios'


export default class CreateActivity extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            address: '',
            date: '',
            time: ''
        }

        this.changeTitle = this.changeTitle.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.changeTime = this.changeTime.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    changeAddress(event) {
        this.setState({
            address: event.target.value
        })
    }

    changeDate(event) {
        this.setState({
            date: event.target.value
        })
    }

    changeTime(event) {
        this.setState({
            time: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            title: this.state.title,
            address: this.state.address,
            date: this.state.date,
            time: this.state.time
        }
        axios.post('http://localhost:5000/app/add', registered)
            .then(response => console.log(response.data))

        this.setState({
            title: '',
            address: '',
            date: '',
            time: ''
        })

        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <form className="new-activity">
                    <div><h3>Create a new activity</h3></div>
                    <input
                        type='text'
                        placeholder='Title'
                        onChange={this.changeTitle}
                        value={this.state.title}
                        className='form-control form-group'
                    />
                    <input
                        type='text'
                        placeholder='Address'
                        onChange={this.changeAddress}
                        value={this.state.address}
                        className='form-control form-group'
                    />
                    <input
                        type='text'
                        placeholder='Date'
                        onChange={this.changeDate}
                        value={this.state.date}
                        className='form-control form-group'
                    />
                    <input
                        type='text'
                        placeholder='Time'
                        onChange={this.changeTime}
                        value={this.state.time}
                        className='form-control form-group'
                    />
                    <input type='submit' class='btn btn-danger btn-block' value='Create' />
                </form>
            </div>
        )
    }
}

