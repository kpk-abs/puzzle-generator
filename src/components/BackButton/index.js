import { Button } from '@mui/material';
import React from 'react';

const BackButton = ({ actions }) =>
	<Button onClick={ () => actions.setScreen('HomeScreen') }>
		Back
	</Button>;

export default BackButton;
