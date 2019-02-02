import React, { Component } from 'react';


class Genres extends Component {
    state = { 
     }
     
    render() { 
        const {selectedItem, items, onItemSelected } = this.props;
        return (
<ul className="list-group">
{items.map(item => 
    <li key={item._id} 
    style={{cursor: 'pointer'}} 
    onClick={() => onItemSelected(item)} 
    className={item === selectedItem ? 'list-group-item active' : 'list-group-item' }>
    {item.name}
    </li>
)}
</ul>
      );
    }
}
 
export default Genres;