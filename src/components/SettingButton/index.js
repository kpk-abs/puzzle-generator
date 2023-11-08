import React from 'react';
import { Button } from '@mui/material';

const SettingButton = ({ actions }) =>
	<Button onClick={ () => { actions.setScreen('SettingScreen'); } }>
		Setting
	</Button>;

export default SettingButton;
