import React from 'react';
import getStyle from '../helpers/getStyle';

const Button = (context) => {
	const { data: { type = '', name, onClick }} = context;
	const value = name[type] || name;

	return (
		<button { ...{
			className: 'gameButton',
			style: {
				...getStyle({
					...context,
					data: { value },
				}),
			},
			onClick: onClick,
		} }
		/>);
};

export default Button;
