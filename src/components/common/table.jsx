import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = props => {
    const {columns, onSort, data, sortColumn} = props;
    return (
        <table className="table">
            <TableHeader 
            columns = {columns} 
            onSort={onSort} 
            sortColumn={sortColumn}/>
            <TableBody 
            columns={columns} 
            data={data} />                   
         </table>
      );
}
 
export default Table