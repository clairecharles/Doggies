import React from "react";
import { magazine } from "./magazine";
import Image from "../Componenets/Image/Image";

const ImgList = () => {
	return (
		<div>
			{magazine.map((user, i) => {
				return (
					<div className="pets">
						<Image
							key={i}
							id={magazine[i].id}
							image={magazine[i].image}
							dog={magazine[i].dog}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ImgList;
