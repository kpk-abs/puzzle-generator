import React from 'react';
import GameObject from '../../GameObject';
import background from '../../../Images/background.png';

const BoardItems = (context) =>
	context.data.map((prop, key) => {
		const { x, y } = prop.position;

		return (
			<div
				key={ key }
				className="boardItem"
				style={ { left: `${ x }%`, top: `${ y }%` } }
			>
				<GameObject { ...{ ...context, data: prop } }/>
			</div>);
	});

const Board = (context) => {
	const { config: { ratioMultiplier: { width, height }}} = context;

	return (
		<div
			className="board"
			style={ { background: `url(${ background })` } }
		>
			<div
				className="boardContainer"
				style={ {
					width: `calc(100dvw * ${ width })`,
					height: `calc(100dvh * ${ height })`,
				} }
			>
				<BoardItems { ...context }/>
			</div>
		</div>
	);
};

export default Board;
