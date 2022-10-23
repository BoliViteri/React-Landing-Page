import React from "react";

//include images into your bundle
import jS from "../../img/JS.png";
import HTML5 from "../../img/HTML5.png";
import CSS from "../../img/CSS.png";
import ReactIMG from "../../img/React.png";
//create your first component
const Card = () => {
  return (
<div class="card-deck" style={{display:'flex'}} >
<div  style={{height:'16rem',width:'14rem', flex:'1%',  padding: '1rem'}}>
  </div>
  <div class="card" style={{height:'24rem',width:'14rem', flex:'5%',  padding: '1rem'}}>
    <img class="card-img-top" src={jS} style={{height:'10rem',width:'10rem', }}/>
    <div class="card-body">
      <h5 class="card-title">JS - DOM DOM DOM</h5>
      <p class="card-text">Learn more about our courses on Javascript.</p>
      <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Contact Us</a>
  </p>
    </div>
  </div>
  <div  style={{height:'18rem',width:'14rem', flex:'1%',  padding: '1rem'}}>
  </div>
  <div class="card" style={{height:'24rem',width:'14rem', flex:'5%',  padding: '1rem'}}>
    <img class="card-img-top" src={HTML5} style={{height:'10rem',width:'10rem', }}/>
    <div class="card-body">
      <h5 class="card-title">HTML5 - Start Tagging</h5>
      <p class="card-text">Learn more about our courses on HTML5.</p>
      <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Contact Us</a>
  </p>
    </div>
  </div>
  <div  style={{height:'18rem',width:'14rem', flex:'1%',  padding: '1rem'}}>
  </div>
  <div class="card" style={{height:'24rem',width:'14rem', flex:'5%',  padding: '1rem'}}>
    <img class="card-img-top" src={CSS} style={{height:'10rem',width:'8rem', }}/>
    <div class="card-body">
      <h5 class="card-title">CSS - Style your heart away</h5>
      <p class="card-text">Learn more about our courses on CSS.</p>
      <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Contact Us</a>
  </p>
    </div>
  </div>
  <div  style={{height:'18rem',width:'14rem', flex:'1%',  }}>
  </div>
  <div class="card" style={{height:'24rem',width:'14rem', flex:'5%',  padding: '3rem'}}>
    <img class="card-img-top" src={ReactIMG} style={{height:'10rem',width:'8rem', }}/>
    <div class="card-body">
      <h5 class="card-title">React - Step into the future</h5>
      <p class="card-text">Learn more about our courses on React.</p>
      <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Contact Us</a>
  </p>
    </div>
  </div>
  <div  style={{height:'18rem',width:'14rem', flex:'1%',  padding: '1rem'}}>
  </div>
</div>
  );
};

export default Card;
