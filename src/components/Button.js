import React from 'react';
import getStyle from '../helpers/getStyle';

const Button = (context) => {
	const { data: { type = '', name, onClick,
		className, children = '' }} = context;
	const value = name[type] || name;

	return (
		<button { ...{
			className: `gameButton ${ className }`,
			style: {
				...getStyle({
					...context,
					data: { value },
				}),
			},
			onClick: onClick,
		} }
		>{children}</button>);
};

export default Button;
