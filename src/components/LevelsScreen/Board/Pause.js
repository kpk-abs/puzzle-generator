import { PauseOutlined } from '@mui/icons-material';
import React from 'react';

const Pause = ({ actions, state: { pause }}) =>
	<PauseOutlined onClick={ () => { actions.setPause(!pause); } }/>;

export default Pause;
