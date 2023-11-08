import React from 'react';
import PlayButton from '../PlayButton.js';

const GameScreen = (context) =>
	<div>
		<PlayButton { ...context }/>
	</div>;

export default GameScreen;
