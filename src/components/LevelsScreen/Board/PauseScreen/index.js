import React from 'react';
import Levels from './Levels';
import RestartLevel from '../../RestartLevel';
import { Backdrop } from '@mui/material';
import Home from './Home';

const PauseScreen = (context) => {
	const { actions, state: { pause }} = context;

	return (
		<Backdrop
			open={ pause }
			sx={ { zIndex: (theme) => theme.zIndex.drawer + 1 } }
			onClick={ () => actions.setPause(!pause) }
		>
			<Levels { ...context }/>
			<RestartLevel { ...context }/>
			<Home { ...context }/>
		</Backdrop>
	);
};

export default PauseScreen;
