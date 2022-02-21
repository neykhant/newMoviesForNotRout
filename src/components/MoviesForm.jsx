// import React, { Component } from 'react';
// import { useParams} from 'react-router-dom';

// class Moviesform extends Component {

//     handleSave = () => {
//         // this.contenthistory.push('/movies');
//         this.contenthistory.push('/movies')
//     }

//     // let {id} = useParams();

//     render() {
//         return (
//             <div>
//             <h1>MoviesForm- {id}</h1>
//         <button className='btn btn-primary' onClick={this.handleSave}></button>
//         </div>
//         );
//     }
// }

// export default Moviesform;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MoviesForm = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  function handleSave(){
   navigate("/movies");//{ replace: true }
  };

  return (
    <div>
      <h1>MoviesForm- {id}</h1>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
};

export default MoviesForm;
