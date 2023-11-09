import React from 'react';
import GameObject from '../../GameObject';
import background from '../../../Images/background.png';

const Board = ({ data, ...context }) =>
	<div
		className="board"
		style={ { background: `url(${ background })` } }
	>{
			data.map((prop, key) => {
				const { x, y } = prop.position;

				return (
					<div
						key={ key }
						className="boardItem"
						style={ { left: `${ x }%`, top: `${ y }%` } }
					>
						<GameObject { ...{ ...context, data: prop } }/>
					</div>);
			})
		}
	</div>;

export default Board;
