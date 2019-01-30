import React, { Component } from 'react';


const Likes = (props) => {
    let classes = "fa fa-heart"
    if(!props.liked) classes += "-o";
    return (
    <i 
      className={classes} 
      style={{cursor: 'pointer'}} 
      aria-hidden="true" 
      onClick={props.onLike}/>
    );
}
 
export default Likes;

// class Likes extends Component {
    

//     getClicked() {
//         return this.props.isClicked ? "fa fa-heart dark" : "fa fa-heart light";
//     }

//     render() { 
//         let classes = "fa fa-heart"
//         if(!this.props.liked) classes += "-o";
//         return ( 
//             <i className={classes} style={{cursor: 'pointer'}}  aria-hidden="true" onClick={this.props.onLike}></i>
//          );
//     }
// }
 
// export default Likes;