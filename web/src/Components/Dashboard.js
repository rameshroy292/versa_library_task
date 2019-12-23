import React,{useState} from 'react'
import Popup from './Popup';
import TableComp from './table';
import '../App.css';
import loginIcon from '../img/user.png'
import addBook from '../img/add-book.jpg'
import removeBook from '../img/remove-book.jpg'

function Librarydashboard() {
    const imgRight = {
        float : 'right'
    }
    const imgLeft = {
        float : 'left'
    }
    let [showLoginPopup, setShowLoginPopup] = useState(false)
    let [showAddPopup, setShowAddPopup] = useState(false)
    let [showEditPopup, setShowEditPopup] = useState(false)
    let [editDetails, setEditDetails] = useState({})
    let [showDeletePopup, setShowDeletePopup] = useState(false)
    let [deleteDetails, setDeleteDetails] = useState({})
    let [loginFlag, setLoginFlag] = useState(false)
    let [refreshFlag, setRefreshFlag] = useState(0)
    
    function handlePopup(flag,type){
        console.log("popup called"+type+" "+flag)
        if(type === "add"){
            if(!flag){
                setShowAddPopup(false)
                setRefreshFlag(refreshFlag+1)
            }else{
                if(loginFlag){
                    setShowAddPopup(true)
                }else{
                    alert("Please login to add new books!!")
                }
            }
        }else if(type === "delete"){
            if(!flag){
                setShowDeletePopup(false)
                setRefreshFlag(refreshFlag+1)
            }else{
                if(loginFlag){
                    setShowDeletePopup(true)
                }else{
                    alert("Please login to delete books!!")
                }
            }
        }else if(type === "edit"){
            if(!flag){
                setShowEditPopup(false)
                setRefreshFlag(refreshFlag+1)
            }else{
                if(loginFlag){
                    setShowEditPopup(true)
                }else{
                    alert("Please login to add edit or delete books!!")
                }
            }
        }else{
            if(!flag){
                setShowLoginPopup(false)
                setRefreshFlag(refreshFlag+1)
            }else{
                setShowLoginPopup(true)
            }
        }
    }

    function handleLogin(flag){
        setLoginFlag(true)
    }
    function resetDetails(flag){
        setEditDetails({})
    }
    function setDetails(data){
        setEditDetails(data)
    }

    return(
        <>
            {showLoginPopup?<Popup onClose={handlePopup} type="login" onLogin={handleLogin}/>:null}
            {showAddPopup?<Popup onClose={handlePopup} type="add"/>:null}
            {(showEditPopup)?<Popup onClose={handlePopup} details={editDetails} resetDeatils={resetDetails} type="edit"/>:null}
            {(showDeletePopup)?<Popup onClose={handlePopup} details={deleteDetails}  resetDeatils={resetDetails} type="delete"/>:null}
            <div className="heroContainer">
                <div className="TableContainer">
                    <h1>Library Management System</h1> 
                    <div>  
                        {(!loginFlag)?<img className="imgContainer" onClick={handlePopup} title="Login" width='80px' src={loginIcon} alt='loginIcon' style = {imgRight} />:null}
                        <img className="imgContainer" onClick={() => handlePopup(true,"add")} title="Add a book" src={addBook}  width='40px' alt='addIcon' style = {imgLeft} />      
                        <img className="imgContainer" onClick={() => handlePopup(true,"delete")} title="Delete a book" src={removeBook}  width='40px' alt='addIcon' style = {imgLeft} />
                    </div>                                       
                    <TableComp key={refreshFlag} setDeatils={setDetails} showEdit={handlePopup}/>
                </div>
            </div>
       
        </>
    )    
}

export default Librarydashboard