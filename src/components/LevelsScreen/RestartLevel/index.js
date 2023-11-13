import { Button } from '@mui/material';
import React from 'react';

const RestartLevel = ({ actions, state: { level: { name }}}) =>
	<Button onClick={ () => actions.setLevel(name) }>
		Restart
	</Button>;

export default RestartLevel;
