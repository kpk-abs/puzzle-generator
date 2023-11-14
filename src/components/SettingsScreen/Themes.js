import React from 'react';

const Themes = (context) => {
	const { state: { theme }, actions, config: { themes }} = context;

	const onChange = ({ target: { value }}) => actions.setTheme(value);

	return (
		<div className="themes">Themes:
			{themes.map((themeOption) =>
				<label key={ themeOption.value }>
					<input
						type="radio"
						value={ themeOption.value }
						checked={ theme === themeOption.value }
						onChange={ onChange }
					/>
					{themeOption.label}
				</label>)}
		</div>
	);
};

export default Themes;
