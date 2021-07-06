import React, { Component } from 'react';
import axios from "axios";
const URL = "https://calm-oasis-66138.herokuapp.com/get";

class Readings extends Component {
    state = { data : [] }
	
	 constructor(){
        super();
        this.getData();
    }
	
	getData = ()=>{
	
		axios.get(URL)
					.then((response) => {
					  console.log("response =", response.data);
					  this.setState(data,response.data);
					})
					.catch((error) => {
					  console.log("error =", error);
					});
	}
	
	
	
    render() { 
        return ( 
            <React.Fragment>
                <h1>Hi</h1>
            
            </React.Fragment>
         );
    }
}
 
export default Readings;