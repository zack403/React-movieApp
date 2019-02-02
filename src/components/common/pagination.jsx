import React from 'react';
import _ from "lodash";
import PropTypes from "prop-types";



const Pagination = (props) => {
    
    const {itemCount, currentPage, pageChange, pageSize} = props;
    // console.log(currentPage);
    const pagesCount = Math.ceil(itemCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    

    return ( 
        <nav>
      <ul className="pagination">
      {pages.map(page => (
    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}><a className="page-link" onClick={() => pageChange(page)} >{page}</a></li>  
      ))}
  </ul>
      </nav>
     );
}
 
Pagination.propTypes = {
    itemCount : PropTypes.number.isRequired, 
    currentPage : PropTypes.number.isRequired, 
    pageChange :PropTypes.func.isRequired, 
    pageSize : PropTypes.number.isRequired
}

export default Pagination;