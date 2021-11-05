import React, { Component } from 'react'
import NavbarLoggedOrg from '../NavbarOrg'
// import axios from 'axios'
// import NewActivity from '../CreateActivity'

class OrgActivities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            address: '',
            date: '',
            time: '',
            image: ''
            // activities: []
        };
    }

    handleParentData = (formModel) => {
        this.setState({ ...formModel });
    }

    // componentDidMount = () => {
    //     this.getActivity();
    // };

    // getActivity = () => {
    //     axios.get('http://localhost:5000/act/add')
    //         .then((response) => {
    //             // const data = response.data;
    //             // this.setState({ activities: data });
    //             console.log('Data has been received!!', response.data);
    //         })
    //         .catch(() => {
    //             alert('Error retrieving data!!!');
    //         });
    //     // axios({
    //     //     method: "get",
    //     //     url: "/act/app/",
    //     //     withCredentials: true,
    //     //     headers: {
    //     //         "Access-Control-Allow-Origin": "*",
    //     //         "Content-Type": "application/json",
    //     //         Accept: "application/json"
    //     //     }
    //     // })
    //     // .then(response => {
    //     //     if (response && response.data) {
    //     //         this.setState({ activities: response.data });
    //     //         console.log('Data has been received!!');
    //     //     }
    //     // })
    //     // .catch(error => console.log(error))
    // }

    render() {
        return (
            <>
                <NavbarLoggedOrg />
                {/* <NewActivity handleData={this.handleParentData} /> */}
                <h1 className="MyActivities">My Activities - Organizer</h1>
                <p>All the activities this organizer created will be displayed here</p>
                {/* <p>{this.state.title}</p>
                <p>{this.state.address}</p>
                <p>{this.state.date}</p> */}
            </>

        );
    }

}

export default OrgActivities