/* eslint-disable max-lines-per-function */
import React from 'react';
import Button from '../../../Button';

const getPauseButtonScreen = (context) => {
	const { actions, state: { level: { name }, pause }} = context;

	return [
		{
			name: 'levels',
			onClick: () => actions.setLevel(''),
		},
		{
			name: 'restart',
			onClick: () => actions.setLevel(name),
		},
		{
			name: 'home',
			onClick: () => {
				actions.setScreen('home');
				actions.setLevel('');
			},
		},
		{
			name: 'play',
			onClick: () => actions.setPause(!pause),
		},
	];
};

const PauseContainer = (context) =>
	<div className="pauseContainer">
		{
			getPauseButtonScreen(context).map((data, i) =>
				<Button key={ i } { ...{ ...context, data } }/>)
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
