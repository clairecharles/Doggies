import React from 'react';
import './Navbar.css';
import { SidebarData } from '../SidebarData'
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons'

class Navbar extends React.Component {
	render() {
		return (
			<>
				<IconContext.Provider value={{ color: "#fff" }}>
					<div className="navbar">
						<div>
							<Link to="/home" className="h2 push">
								<h2>
									<FaIcons.FaPaw />
									Doggies
								</h2>
							</Link>
						</div>

						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</div>
				</IconContext.Provider>
			</>
		);
	}
}

export default Navbar