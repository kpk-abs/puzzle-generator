import React from 'react';
import getStyle from '../helpers/getStyle';

const Button = (context) => {
	const { actions, data: { type, action, name }} = context;

	return (
		<button { ...{
			className: 'gameButton',
			style: {
				...getStyle({
					...context,
					data: { value: name[type] },
				}),
			},
			onClick: () => { actions[action](!type); },
		} }
		/>);
};

export default Button;
