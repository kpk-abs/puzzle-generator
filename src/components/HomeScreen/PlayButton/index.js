import React from 'react';

const PlayButton = ({ actions }) =>
	<button
		className="gameButton play"
		onClick={ () => { actions.setScreen('LevelsScreen'); } }
	/>;

export default PlayButton;
