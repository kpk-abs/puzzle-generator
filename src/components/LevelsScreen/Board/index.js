import React from 'react';
import GameObject from '../../GameObject';

const Board = ({ data, ...context }) =>
	<div className="board">{
		data.map((prop, key) =>
			<GameObject key={ key } { ...{ ...context, data: prop } }/>)
	}</div>;

export default Board;