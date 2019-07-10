import React from 'react';

class Item extends React.Component {
  render () {
    return <li> {this.props.record.name}, {this.props.record.price}</li>;
  }
}

export default Item;
