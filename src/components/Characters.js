import React from "react";

const Characters = ({ characters = [] }) => {
	return (
		<div className="row row-cols-4">
			{characters.map((item, index) => (
				<div key={index} className="col mb-4">
					<div className="card" style={{ minWidth: "200px" }}>
						<img src={item.image} alt="" />
						<div className="card-body">
							<h5 className="card-title">Name: {item.name}</h5>
							<hr />
							<p>Species: {item.species}</p>
							<p>Gender: {item.gender}</p>
							<p>Origin: {item.origin.name}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Characters;
