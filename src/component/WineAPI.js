import React, { Component } from 'react'
import Axios from 'axios'

const BASE_URL = 'http://myapi-profstream.herokuapp.com/api/6c28ec/wines';

export class Wines extends Component {
    constructor(props){
        super(props);
        this.state = {
            info:[]
        }
    }

    componentDidMount(){
        Axios.get(BASE_URL)
        .then(res => this.setState({info:res.data}))
        .catch(err => console.error (err.message))
    }

    render() {
        return (
            <div>
                <h1>The Wines API</h1>
                {
                    this.state.info.map(wine =>{
                        console.log(wine);
                        return(
                            <div>
                            <h2> The wine name : {wine.name} </h2>
                            <h3> The wine's origin : {wine.country} </h3>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Wines
