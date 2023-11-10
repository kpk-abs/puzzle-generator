import React from 'react';

const BackButton = ({ actions }) =>
	<button
		className="gameButton back"
		onClick={ () => actions.setScreen('HomeScreen') }
	/>;

export default BackButton;
