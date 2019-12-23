import React, { Component } from 'react';
import qs from 'qs';
import axios from  "axios";


class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      "email": "",
      "password": "",
      "loginErrors": ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  handleSubmit(event){
    const { email, password } = this.state;
    const url = "http://localhost:2000/login"
    let data = {
      "email": email,
      "password": password
    }
    console.log(data)
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS',
      'Access-Control-Allow-Headers': '*' },
      data: qs.stringify(data),
      url 
    };
    axios(options).then( response =>{
      
      if(response.data.status === "success"){
        console.log("response", response)   
        this.props.checkLogin()
        alert("You have successfully logged in!!")
        this.setState({
            loggedIn: true
        })
            
      }else{
        alert("Invalid Credentials!!")
      }
    }).then(() => {
      if(this.state.loggedIn){
          this.props.closePop(true)
      }else{
          this.setState({
              username: "",
              password : ""
          })
      }
  }).catch( error =>{
      console.log("login error", error)
    });
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="marSTop">
            <input placeholder="Email" className="inputField" value={this.state.email} name="email" onChange={this.handleChange} type="email" variant="outlined" />
          </div> 
          <div className="marSTop">   
            <input  placeholder="Password" className="inputField" value={this.state.password} name="password" onChange={this.handleChange} type="password" variant="outlined" />
          </div>
          <div className="marSTop"> 
            <button type="submit" className="button" variant="primary">Login</button>
          </div>

        </form>
      </div>
    )
  }

}

export default Login;