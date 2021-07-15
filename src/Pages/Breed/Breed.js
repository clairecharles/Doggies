import React from 'react';
import CardList from '../../Api/CardList';
import { dogs } from '../../Api/dogs';
import './Breed.css'
import SearchBox from '../../Componenets/SearchBox'

class Pets extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			dogs: dogs,
			searchfield: "",
		};
	}

	// componentDidMount() {
	//     fetch( "https://jsonplaceholder.typicode.com/photos")
	//         .then(response => response.json())
	//         .then(photos => this.setState({ dogs: dogs  }))
	// }

	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value });
	// };

	render() {
		const { dogs, searchfield } = this.state
		const filteredDogs = dogs.filter(dog => (
			dog.Breed.toLowerCase().includes(searchfield.toLowerCase())
		))
		// const filteredDogs = this.state.dogs.filter((dog) => {
		// 	return dog.Breed.toLowerCase().includes(
		// 		this.state.searchfield.toLowerCase() 
		// 	);
		// });

		return (
			<div className="tc">
				<img
					src="https://artprojectsforkids.org/wp-content/uploads/2020/06/Draw-a-Dog.jpg"
					alt="dog"
					    width= '200px'
				/>
				<h1>Which dog breed do you prefer?</h1>
				<h4> -- NOTE: There are no buttons -- </h4>
				<SearchBox placeholder='Search Dogs' handleChange={(event) => this.setState({ searchfield: event.target.value })}
				 />
				<CardList dogs={filteredDogs} />
			</div>
		);
	}

}

export default Pets;