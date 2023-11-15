import React from 'react';
import Button from '../Button';

const getButtonData = (context) => {
	const { actions } = context;

	return [
		{
			name: 'play',
			onClick: () => actions.setScreen('levels'),
		},
		{
			name: 'settings',
			onClick: () => actions.setScreen('settings'),
		},
	];
};

const HomeScreen = (context) => {
	const { config: { background }, state: { theme }} = context;

	return (
		<div
			className="homeScreen"
			style={ { backgroundImage: `url(${ background[theme] })` } }
		>
			{getButtonData(context).map((data, i) =>
				<Button
					key={ i }
					{ ...{ ...context, data } }
				/>)}
		</div>);
};

export default HomeScreen;
