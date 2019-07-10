import React from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

class Content extends React.Component {
  componentDidMount () {
    console.log(this.props);
  }
  constructor (props) {
    super(props);
    this.items = [
      { name: 'Kolbász',
        price: 1000 },
      { name: 'KacsaZsír', price: 500 }
    ];
  }
  render () {
    const items = this.items.map(item => <Item record={item} key={item.name} />);
    return (<div><table class='table'>
      <thead class='thead-dark'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Price</th>
          <th scope='col'>Handle</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
    </div>);
  }
}

export default Content;
