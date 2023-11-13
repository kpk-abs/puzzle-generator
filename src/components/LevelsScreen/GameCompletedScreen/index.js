import { Button } from '@mui/material';
import React from 'react';
import gameManager from '../../../services/gameManager';

const GameCompletedScreen = (context) => {
	const { actions } = context;
	const { isNextLevel, data } = gameManager.getNextLevel(context);

	return isNextLevel
		? <Button onClick={ () => { actions.setLevel(data); } }>
			GameCompletedScreen
		</Button>
		: 'Completed all Levels';
};

export default GameCompletedScreen;
