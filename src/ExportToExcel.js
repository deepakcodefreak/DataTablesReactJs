import React, {Component} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import '../src/App.css'
 
class ExportToExcel  extends Component {
 
    constructor(props) {
        super(props);
    }
 
    render() {
 
        return (
            <div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="export"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export"/>
                <table hidden={true} id="table-to-xls">
                   <tbody>
                       {
                           this.props.posts.map((post)=>{
                               return (
                                   <tr key={post.id}>
                                        <td>{post.userId}</td>
                                        <td>{post.Id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                   </tr>
                               )
                           })
                       }
                   </tbody>
                </table>
 
            </div>
        );
    }
}
 
export default ExportToExcel;