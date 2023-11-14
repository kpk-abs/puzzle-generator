import React from 'react';
import GameObject from '../../GameObject';
import background from '../../../Images/background.png';
import Pause from './Pause';
import PauseScreen from './PauseScreen';

const BoardItems = (context) => {
	const { state: { level: { data }}} = context;

	return data.map((prop, key) => {
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
};

const BoardContainer = (context) => {
	const { config: { ratioMultiplier: { width, height }}} = context;

	return (
		<div
			className="boardContainer"
			style={ {
				width: `calc(100dvw * ${ width })`,
				height: `calc(100dvh * ${ height })`,
			} }
		>
			<Pause { ...context }/>
			<BoardItems { ...context }/>
		</div>
	);
};

const Board = (context) =>
	<div
		className="board"
		style={ { background: `url(${ background })` } }
	>
		<PauseScreen { ...context }/>
		<BoardContainer { ...context }/>
	</div>;

export default Board;
