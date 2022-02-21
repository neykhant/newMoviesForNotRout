import React from 'react';
import _ from "lodash";

function renderCell(item, column){
    return  _.get(item, column.path ) || column.content(item);
}

function createKey(column){
    return  column.path || column.key;
}

const TableBody = ({items, columns}) => {
    return ( 
         <tbody>
             {
                 items.map(item => <tr key={item._id}>
                     {
                         columns.map(column => <td key={ createKey(column)}>{renderCell(item, column)}</td>)
                     }
                 </tr>)
             }
         </tbody>
     );
}
 
export default TableBody;