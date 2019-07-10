import React from 'react';
import Item from './Item';

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
    return <div><ul>{items}</ul></div>;
  }
}

export default Content;
