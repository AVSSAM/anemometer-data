import React, { Component } from 'react';
import axios from "axios";
import BasicTable from '../components/table'
const URL = "https://calm-oasis-66138.herokuapp.com/get";

class Readings extends Component {
    state = { data : [] }
	
	 constructor(){
        super();
        this.getData();
		setInterval(this.getdata,1000);
    }
	
	
					   

	
	getData = ()=>{
		
		console.log("hi");
		axios.get(URL)
					.then((response) => {
					  console.log("response =", response.data);
					  this.setState({data:response.data});
					
					})
					.catch((error) => {
					  console.log("error =", error);
					});
	}
	
	
	
    render() { 
        return ( 
            <React.Fragment>
                <BasicTable data={this.state.data}/>
            
            </React.Fragment>
         );
    }
}
 
export default Readings;