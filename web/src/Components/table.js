import React,{Component} from 'react'
import {Table} from 'react-bootstrap'
import './../App.css';
class TableComp extends Component{
  constructor(props){
    super(props);
    this.state = {
      tableData : [],
      is_checked: false 
    }
  }

  componentDidMount(){
    fetch("http://localhost:2000/listBooks",{method:"GET"})
      .then(response => response.json())
      .then(data => 
        this.setState({
            tableData : data,
        })
      )
  }

  handleEdit = (index) => {
    console.log("Clicked edit");
    this.props.setDeatils(this.state.tableData[index])
    this.props.showEdit(true,"edit")                
  }
  
  handleCheckAll = (bookid) =>{
    console.log("check the data")
    this.setState({checked: !this.state.checked});
  }
  handleCheck = (index) =>{    
    console.log("book id",this.state.tableData[0])
    this.setState({checked: this.state.checked});
    this.props.setDeatils(this.state.tableData[index])
  }
  

  
  render(props){
    let rows = []
    if(this.state.tableData.length>0){
      for(let i=0;i<this.state.tableData.length;i++){
        rows.push(
          <tr>
            <td><input type="checkbox"  onChange={this.handleCheck.bind(this.state.tableData[i].bookid)} defaultChecked={this.state.checked} /></td>
            <td>{this.state.tableData[i].bookid}</td>
            <td style={{cursor:"pointer"}} key={i} onClick={() => this.handleEdit(i)}><u className="Active">{this.state.tableData[i].name}</u></td>
            <td>{this.state.tableData[i].author}</td>
            <td>{this.state.tableData[i].price}</td>
            <td>{this.state.tableData[i].publisher}</td>
          </tr>
        )
      }
    }
    return(
      <div className="TableContainer">
      <div className="tableFixHead">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><input type="checkbox" onChange={this.handleCheckAll} defaultChecked={this.state.checked}/></th>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Price</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </Table>
      </div>
      </div>
    ) 
  }
     
}

export default TableComp