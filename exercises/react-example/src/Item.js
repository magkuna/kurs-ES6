import React from 'react';

const Item = (props) => ({
  render() {
  	if (props.done) {
  		return <li><del>{this.props.name}</del></li>
  	}

    return <li>{this.props.name}</li>
  }
});
export default Item;