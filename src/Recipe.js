import React from 'react';

const Recipe = ({title,calories,image, ingredients}) => {
	return(
		<div className="recipe">
			<h1>{title}</h1>
			<ul>
				{ingredients.map(ingred =>(
					<li>{ingred.text}</li>
				))}
			</ul>
			<p>{calories} calories</p>
			<img src={image} alt=""/>
		</div>
	);
}

export default Recipe;