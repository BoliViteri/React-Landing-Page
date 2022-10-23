import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import React from "react";


//create your first component
const Main = () => {
	return[
        <Navbar />,
        <Jumbotron />,
        <Card />
    ];
};

export default Main;