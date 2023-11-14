import React from 'react';
import Levels from './Levels';
import RestartLevel from '../../RestartLevel';
import Home from './Home';
import Play from './Play';

const components = [Levels, RestartLevel, Home, Play];

const PauseContainer = (context) =>
	<div className="pauseContainer">
		{
			components.map((Component, i) =>
				<Component key={ i } { ...context }/>)
		}
	</div>;

const PauseScreen = (context) => {
	const { state: { pause }} = context;

	return (
		pause
		&& <div className="pause">
			<PauseContainer { ...context }/>
		</div>
	);
};

export default PauseScreen;
