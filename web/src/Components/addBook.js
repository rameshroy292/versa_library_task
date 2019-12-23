import React from 'react';

class AddBookForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bookname : "",
            author : "",
            publisher : "",
            price : 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this)
    }
  
    handleChange(event){
      this.setState({
        [event.target.name]:event.target.value
      });
    }
  
    handleOnclick = (props) => {
        if(this.state.name.length>0&&this.state.author.length>0&&this.state.publisher.length>0&&this.state.price>0){
            fetch("http://localhost:2000/addBooks",{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                })
                .then(response => response.json())
                .then(data => {
                  alert("Book added successfully")
                })
                .then(() => {this.props.closePop(true)})
                .catch(err => {console.log(err)})
        }else{
            alert("Please fill all the details.")
        }
    }
  
    handleChange = (event) => {
        if(event.target.id === "name"){
            this.setState({name : event.target.value})
        }else if(event.target.id === "publisher"){
            this.setState({publisher : event.target.value})
        }else if(event.target.id === "author"){
            this.setState({author : event.target.value})
        }else if(event.target.id === "price"){
            this.setState({price : event.target.value})
        }else if(event.target.id === "publishdate"){
            this.setState({publishdate : event.target.value})
        }
    }
  
    render(props){
        return(
            <div className="LoginContainer">
                <div className="marSTop">
                    <input className="inputField" placeholder="Name of the book" value={this.state.name} id="name" onChange={this.handleChange} label="Book Name" variant="outlined" />
                </div> 
                <div className="marSTop">   
                    <input className="inputField" placeholder="Author of the book" value={this.state.author} id="author" onChange={this.handleChange} label="Author Name" variant="outlined" />
                </div>
                <div className="marSTop">
                    <input className="inputField" placeholder="Publisher of the book" value={this.state.publisher} id="publisher" onChange={this.handleChange} label="Publisher" variant="outlined" />
                </div> 
                <div className="marSTop">   
                    <input className="inputField" placeholder="Price of the book" value={this.state.price} id="price" onChange={this.handleChange} type="number"  label="Price" variant="outlined" />
                </div> 
                <div className="marSTop">   
                    <button type="submit" onClick ={this.handleOnclick} variant="primary"  >Add Book </button>        
                </div>
            </div>
        )
    }
  }

  export default AddBookForm;