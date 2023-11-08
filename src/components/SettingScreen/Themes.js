import React from 'react';
import Select from 'react-web-components/Select';

const Themes = (context) => {
	const { state: { theme }, actions, config: { themes }} = context;
	const onChange = ({ target: { value }}) => actions.setTheme(value);

	return <div>
		<Select { ...{
			value: theme,
			options: themes,
			onChange: onChange,
		} }
		/>
	</div>;
};

export default Themes;
