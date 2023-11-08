import React from 'react';
import GameObject from '../../GameObject';
import background from '../../../Images/background.png';
const Board = ({ data, ...context }) =>
	<div
		className="board"
		style={ { background: `url(${ background })` } }
	>{
			data.map((prop, key) =>
				<GameObject key={ key } { ...{ ...context, data: prop } }/>)
		}
	</div>;

export default Board;
