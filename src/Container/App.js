import React from "react";
import "./App.css";
import Navbar from '../Componenets/Navbar/Navbar';
// import Footer from "../Componenets/Footer";
import Breed from "../Pages/Breed/Breed";
import Home from "../Pages/Home/Home";
import Magazine from "../Pages/Magazine/Magazine";
import Login from "../Pages/Login/Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component{
	render() {
		return (
			<div>
				<>
					<Router>
						<Navbar />
						<Switch>
							<Route path="/" exact component={Login} />
							<Route path="/home" exact component={Home} />
							<Route path="/breed" component={Breed} />
							<Route path="/magazine" component={Magazine} />
						</Switch>
					</Router>

				</>

			</div>
		);
	}
}
export default App;

