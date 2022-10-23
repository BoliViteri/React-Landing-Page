import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
<div class="jumbotron jumbotron-fluid"  style={{padding:'1rem',backgroundColor: 'lightgrey'}}>
<div class="container">
  <h1 class="display-4">Welcome to Boli's Training Options</h1>
  <p class="lead">Courses meant to fit all learning styles</p>
  <p>If you want to learn more, or have questions, please contact us</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Contact Us</a>
  </p>
  </div>
</div>
	);
};

export default Jumbotron;