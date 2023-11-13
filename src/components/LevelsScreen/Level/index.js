import React from 'react';
import Board from '../Board';

const Level = (context) => {
	const { state: { level: { data }}} = context;

	return <Board { ...{ ...context, data } }/>;
};

export default Level;
