import React from 'react'
import ReactDOM from "react-dom"
import Volunteer from './Volunteer'

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Hedera",
            cities: [],
            city: ""
        }
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleChangeCity = event => {
        this.setState({ city: event.target.value });
    };

    getUnique(arr, comp) {
        const unique = arr
            //store the comparison values in array
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])

            .map(e => arr[e]);

        return unique;
    }

    componentDidMount() {
        const cities = require("./cities.json");
        this.setState({ cities: cities });
    }

    render() {
        const uniqueCity = this.getUnique(this.state.cities, "tag");

        const cities = this.state.cities;
        const city = this.state.city;

        const filterDropdown = cities.filter(function (result) {
            return result.tag === city;
        });

        return (
            <div>
                <form>
                    <br />
                    <br />
                    <label>
                        Find the nearest activity for you
                        <select
                            value={this.state.city}
                            onChange={this.handleChangeCity}
                        >
                            {uniqueCity.map(city => (
                                <option key={city.id} value={city.tag}>
                                    {city.tag}
                                </option>
                            ))}
                        </select>
                    </label>
                    <div>
                        {filterDropdown.map(city => (
                            <div key={city.id} style={{ margin: "10px" }}>
                                {city.city}
                                <br />
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Filter />, document.querySelector("#root"));



export default Filter


