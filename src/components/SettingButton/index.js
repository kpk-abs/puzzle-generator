import React from 'react';
import { Button } from '@mui/material';

const SettingButton = ({ actions }) =>
	<Button onClick={ () => { actions.setSetting(); } }>Setting</Button>;

export default SettingButton;
