import React, { Component} from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import ExportToExcel from '../src/ExportToExcel';


class App extends Component {

  state={
    posts:[]
  }

   componentDidMount(){
     const url = "https://jsonplaceholder.typicode.com/posts";
     axios.get(url)
      .then((response)=> {
        this.setState({posts:response.data})
      //  console.log(response);
     })
     .catch(function (error) {
       console.log(error);
      });
    } 

    deleteRow = (id)=>{
      const index = this.state.posts.findIndex((post)=>{
        return post.id === id;
      });
      console.log("index",index);
    }

  render() {
    // console.log(this.state)

    const columns = [
      {
        Header:"User ID",
        accessor:"userId",
        style:{
          textAlign:'center'
        },
        width:100,
        maxWidth:100,
        minWidth:100
      },
      {
        Header:"ID",
        accessor:"id",
        style:{
          textAlign:'right'
        },
        width:100,
        maxWidth:100,
        minWidth:100
      },
      {
        Header:"Title",
        accessor:"title",
        sortable:false,
        filterable:false
      },
      {
        Header:"Body",
        accessor:"body",
        sortable:false,
        filterable:false
      },
      {
        Header:"Actions",
        Cell: props=>{
          return (
            <button 
             style={{backgroundColor:'red',color:'white'}}
             onClick={()=>this.deleteRow(props.original.id)}
            >
              Delete
            </button>

          )
        },
        style:{
          textAlign:'center'
        },
        width:100,
        maxWidth:100,
        minWidth:100
      }
    ]

    return (
      <ReactTable
        columns={columns}
        data={this.state.posts}
        filterable
        noDataText="Please Wait ..."
        defaultPageSize={25}
      >
        {(state,filtredData,instanceo)=>{
          this.ReactTable = state.pageRows.map((post)=>{
            return post._original;
          })
          return (
            <div>
              {filtredData()}
              <ExportToExcel posts={this.ReactTable}/>
            </div>
          )
        }}
      </ReactTable>
    );
  }
}

export default App;
