import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';


class CreateActivity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            address: '',
            date: '',
            time: '',
            image: ''
        }

        this.changeTitle = this.changeTitle.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.changeTime = this.changeTime.bind(this)
        this.changeImg = this.changeImg.bind(this)
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

    changeImg(event) {
        this.setState({
            image: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            title: this.state.title,
            address: this.state.address,
            date: this.state.date,
            time: this.state.time,
            image: this.state.image
        }
        axios.post('http://localhost:5000/act/add', registered)
            .then(response => console.log(response.data))

        this.setState({
            title: '',
            address: '',
            date: '',
            time: '',
            image: ''
        })

        this.props.history.push('/MyOrg_activities');
        // this.props.handleData(this.state);
    }
    render() {
        return (
            <div className="container">
                <form className="new-activity" onSubmit={this.onSubmit} action="/" method="POST" >
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
                    <input
                        type='text'
                        placeholder='image url'
                        onChange={this.changeImg}
                        value={this.state.image}
                        className='form-control form-group'
                    />
                    <img alt="" src={this.state.image} />
                    <input type='submit' class='btn btn-danger btn-block' value='Create' />
                </form>
            </div>
        )
    }
}

export default withRouter(CreateActivity);