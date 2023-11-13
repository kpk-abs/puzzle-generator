import React from 'react';
import getStyle from '../../../helpers/getStyle';

const SettingButton = (context) => {
	const { actions } = context;

	return (
		<button
			className="gameButton"
			style={ getStyle({ ...context, data: { value: 'setting' }}) }
			onClick={ () => { actions.setScreen('SettingScreen'); } }
		/>);
};

export default SettingButton;
