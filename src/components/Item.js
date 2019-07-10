import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Item extends React.Component {
  render () {
    return (
      <tr>
        <th scope='row'>1</th>
        <td>{this.props.record.name}</td>
        <td>{this.props.record.price}</td>
        <td><button>Delete</button></td>
      </tr>
    );
    // <li> {this.props.record.name}, {this.props.record.price}</li>;
  }
}

export default Item;
