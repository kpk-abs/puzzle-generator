import React from 'react';

const Number = (context) => {
	const { data: { value }, config: { size }} = context;

	return (
		<div
			className="number"
			style={ { fontSize: `${ size }vMin` } }
		>
			{value}
		</div>);
};

export default Number;
