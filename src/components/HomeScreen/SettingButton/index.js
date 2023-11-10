import React from 'react';

const SettingButton = ({ actions }) =>
	<button
		className="gameButton settings"
		onClick={ () => { actions.setScreen('SettingScreen'); } }
	/>;

export default SettingButton;
