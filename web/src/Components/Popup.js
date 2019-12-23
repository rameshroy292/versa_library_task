import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'

import Login from './login'
import EditBook from './EditBook'
import AddBook from './addBook'
import DeleteBook from './deleteBook'


function Popup(props) {
    const [show, setShow] = useState(true);
  
    const handleClose = (flag) => {
        props.onClose(false,props.type);
        if(!flag){
            setShow(false)
        }
    }
  
    return (
            
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    {(props.type==="login")?<Modal.Title>Login</Modal.Title>:null}
                    {(props.type==="add")?<Modal.Title>Add Book</Modal.Title>:null}
                    {(props.type==="edit")?<Modal.Title>Update Book</Modal.Title>:null}
                    {(props.type==="delete")?<Modal.Title>Delete Book</Modal.Title>:null}
                </Modal.Header>

                <Modal.Body>
                    {(props.type==="login")?<Login closePop={handleClose} checkLogin={props.onLogin}/>:null}
                    {(props.type==="add")?<AddBook  closePop={handleClose}/>:null}
                    {(props.type==="edit")?<EditBook details={props.details} closePop={handleClose}/>:null}
                    {(props.type==="delete")?<DeleteBook closePop={handleClose}/>:null}
                    
                    <Button className="marSTop fullWidth" size="lg" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
    );
}

export default Popup  