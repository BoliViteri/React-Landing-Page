import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{padding:'1rem'}}>
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" >
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
	);
};

export default Navbar;




// import React from 'react';
// //import {  Link } from "react-router-dom";
// const navbar= () =>{
//   return (
//   <div class="navbar-nav mr-auto">
//     <li>
//     <a class="nav-link" href="#">Home </a>
//     </li>
//     <li>
//     <a class="nav-link" href="#">Home </a>
//     </li>
//     <li>
//     <a class="nav-link" href="#">Home </a>
//     </li>
//     <li>
//     <a class="nav-link" href="#">Home </a>
//     </li>
//   </div>
//   );
// }
// export default navbar;