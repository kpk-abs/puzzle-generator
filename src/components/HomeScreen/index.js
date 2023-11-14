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
			name: 'setting',
			onClick: () => actions.setScreen('setting'),
		},
	];
};

const HomeScreen = (context) =>
	<div className="homeScreen">
		{getButtonData(context).map((data, i) =>
			<Button
				key={ i }
				{ ...{ ...context, data } }
			/>)}
	</div>;

export default HomeScreen;
