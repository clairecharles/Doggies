import React from "react";
import { magazine } from "../../Api/magazine";
import ImgList from "../../Api/ImgList";

class Magazine extends React.Component {


	componentDidMount() {
	    fetch( "https://jsonplaceholder.typicode.com/photos")
	        .then(response => response.json())
	        .then(photos => this.setState({ magazine: magazine  }))
	}

	render() {
		return (
			<div className="tc">
				<ImgList/>
			</div>
		);
	}
}

export default Magazine;
