import React from 'react';
import Card from '../Componenets/Card/Card.js';

const CardList = ({ dogs}) => {
return (
	<div>
		{
			dogs.map((user, i) => {
				return (
					<div>
						<Card
							key={i}
							id={dogs[i].id}
							img={dogs[i].img}
							Breed={dogs[i].Breed} />
					</div>
				)
			})
		}
	</div>
	)
}
export default CardList;