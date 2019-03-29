import React from 'react';
import Item from './Item';

class List extends React.Component {
  render() {
    return (
      <ul>
        <Item name="javascript" done={true}/>
        <Item name="es6" done={true}/>
        <Item name="react"/>
      </ul>
    );
  }
}
export default List;