import React from 'react';
import Button from '../../Button';

const Pause = (context) => {
	const { actions, state: { pause }} = context;

	return (
		<Button { ...{
			...context,
			data: {
				name: 'pause',
				onClick: () => actions.setPause(!pause),
			},
		} }
		/>);
};

export default Pause;
