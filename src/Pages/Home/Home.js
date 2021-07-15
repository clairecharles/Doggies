import React from 'react';
import './Home.css'


class Home extends React.Component{
    render() {
        return (
					<div className="texts tc">
						<h1>Welcome To my dog Breed App</h1>
						<div className="child">
							<img
								src="https://media.istockphoto.com/photos/group-of-various-dog-portraits-picture-id1182419818?k=6&m=1182419818&s=612x612&w=0&h=hRaco6LeLK8XHkEAg3x9o43lsFJhZOLx16jfcipW4PI="
								alt="blag"
								className="img"
							/>
							<img
								src="https://media.istockphoto.com/photos/portrait-collection-of-adorable-puppies-picture-id1124344916?k=6&m=1124344916&s=612x612&w=0&h=owznLkopGZSpBLTEo9OwIMGaKyUS64hVTaWbEGBCHNM="
								alt="blag"
								className="img"
							/>
							<img
								src="https://media.istockphoto.com/photos/set-of-common-dogs-picture-id599138942?k=6&m=599138942&s=612x612&w=0&h=_XU8mXWFf0j-G7JHN1fQdoRY-GQMRpljT4n4fiRAnd0="
								alt="blag"
								className="img"
							/>
						</div>
					</div>
				);
    }
}

export default Home
