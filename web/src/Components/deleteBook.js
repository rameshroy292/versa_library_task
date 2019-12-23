import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

class DeleteBookForm extends Component{
    constructor(props){
        super(props)
        console.log("props",props)
        this.state = {
            bookid : props.details.bookid,
            changedForm : false
        }
    }

   
    handleDelete = (props) => {
        
            fetch("http://localhost:2000/deleteBook?bookid="+this.state.bookid,{ method: "DELETE" })
                .then(response => response.json())
                .then(data => {
                    if(data){
                        if(data.message){
                            if(data.message.toLowerCase().indexOf("success")!==-1){
                                alert(data.message)
                            }else{
                                alert("Failed to delete book!!")
                            }
                        }else{
                            alert("Failed to delete book!!")
                        }
                    }else{
                        alert("Failed to delete book!!")
                    }
                })
                .then(() => {this.props.closePop(true)})
                .catch(err => {console.log(err)})
        
    }

    handleChange = (event) => {
        this.setState({
            changedForm : true
        })
        if(event.target.id === "bookid"){
            this.setState({publishdate : event.target.value})
        }
    }

    render(props){
        return(
            <div className="LoginContainer">
                <span>Confirm the book id to delete</span>                
                <div className="marSTop">
                    <input className="inputField" placeholder="Book id" value={this.state.bookid} id="bookid" onChange={this.handleChange} label="Publishing Date" variant="outlined" />
                </div> 
                <Button className="marSTop" size="lg" onClick={this.handleDelete} variant="primary">
                    Delete Book
                </Button>

            </div>
        )
    }
}

export default DeleteBookForm 