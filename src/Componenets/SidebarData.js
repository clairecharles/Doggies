import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
	{
		title: "Home",
		path: "/home",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Breed",
		path: "/breed",
		icon: <FaIcons.FaDog />,
		cName: "nav-text",
	},
	{
		title: "PetMagazine",
		path: "/magazine",
		icon: <SiIcons.SiDatadog />,
		cName: "nav-text",
	},
];
