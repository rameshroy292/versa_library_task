import React from 'react';

class Userlogin extends React.Component {
    render(){
      return(
        <div className="bgImg">
            <div>
                <h1>Login</h1>
            </div>                                
            <div id="login" >
                <input type="text" id="name" Placeholder="Enter Name" /><br />
                <input type="password" id="password" placeholder="Enter Password"/><br />
                <button id="submit">Submit</button>
            </div>       
         </div>
      )    
    }
  }

export default Userlogin;