import { Button } from '@mui/material';
import React from 'react';

const RestartLevel = ({ actions, state: { name }}) =>
	<Button onClick={ () => actions.setLevel(name) }>
		Restart
	</Button>;

export default RestartLevel;
