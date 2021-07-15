import React from 'react'
import './Card.css'

const Card = ({ Breed, img }) => {
	return (
		<div className="parent">
			<div className="baby">
				<img alt="blah" src={img} className="imgs1" />
				<p className="paragraph">{Breed}</p>
			</div>
		</div>
	);
}

export default Card