import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

class EditBookForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : props.details.name,
            author : props.details.author,
            publisher : props.details.publisher,
            price : props.details.price,
            bookid : props.details.bookid,
            changedForm : false
        }
    }

    handleEdit = (props) => {
        console.log(" i am here")
        console.log(this.state.bookname)
        if(this.state.name.length>0&&this.state.bookid.length>0&&this.state.author.length>0&&this.state.publisher.length>0&&this.state.price>0&&this.state.bookid.length>0){
            fetch("http://localhost:2000/updateBook",{
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(this.state)
                })
                .then(response => response.json())
                .then(data => {
                    if(data){
                        if(data.message){
                            if(data.message.toLowerCase().indexOf("success")!==-1){
                                alert(data.message)
                            }else{
                                alert("Failed to update book!!")
                            }
                        }else{
                            alert("Failed to update book!!")
                        }
                    }else{
                        alert("Failed to update book!!")
                    }
                })
                // .then(() => {
                //     window.location.reload(false);
                // })
                .then(() => {this.props.closePop(true)})
                .catch(err => {console.log(err)})
        }else{
            alert("Please fill all the details.")
        }
    }

    handleDelete = (props) => {
        if(this.state.bookid.length>0){
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
                // .then(() => {
                //     window.location.reload(false);
                // })
                .then(() => {this.props.closePop(true)})
                .catch(err => {console.log(err)})
        }else{
            alert("Failed to delete!!");
        }
    }

    handleChange = (event) => {
        this.setState({
            changedForm : true
        })
        if(event.target.id === "name"){
            this.setState({name : event.target.value})
        }else if(event.target.id === "publisher"){
            this.setState({publisher : event.target.value})
        }else if(event.target.id === "author"){
            this.setState({author : event.target.value})
        }else if(event.target.id === "price"){
            this.setState({price : event.target.value})
        }else if(event.target.id === "bookid"){
            this.setState({publishdate : event.target.value})
        }
    }

    render(props){
        return(
            <div className="LoginContainer">
                <span>Do some changes to update the book</span>
                <div className="marSTop">
                    <input className="inputField" placeholder="Name of the book" value={this.state.name} id="name" onChange={this.handleChange} label="Book Name" variant="outlined" disabled />
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
                    <input className="inputField" placeholder="Book id" value={this.state.bookid} id="bookid" onChange={this.handleChange} label="Publishing Date" variant="outlined" disabled/>
                </div> 
                <Button className="marSTop" size="lg" onClick={this.handleEdit} variant="primary">
                    Update Book
                </Button>

            </div>
        )
    }
}

export default EditBookForm 