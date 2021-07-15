import React from "react";
import "./Image.css";

const Images = ({ dog, image }) => {
	return (
		<div className="container">
			<div className="child">
				<img alt="img" src={image} className="imgs" />
			</div>
		</div>
	);
};

export default Images;
