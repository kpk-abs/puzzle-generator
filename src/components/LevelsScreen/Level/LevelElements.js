import { map, values } from '@laufire/utils/collection';
import React from 'react';
import levels from '../../../data/levels';
import Button from '../../Button';

const getBackButtonData = (context) => {
	const { actions } = context;

	return {
		className: 'back',
		onClick: () => actions.setScreen('home'),
		name: 'back',
	};
};

const getButtonData = (context) => {
	const { actions, data: { name, label }} = context;

	return {
		name: 'level',
		onClick: () => actions.setLevel(name),
		children: label,
	};
};

const LevelElements = (context) =>
	<div>
		<div className="levels">
			<div className="levelContainer">
				{values(map(levels, (level, i) =>
					<Button
						key={ i }
						{ ...{
							...context,
							data: getButtonData({ ...context, data: level }),
						} }
					/>))}
			</div>
		</div>
		<Button { ...{ ...context, data: getBackButtonData(context) } }/>
	</div>;

export default LevelElements;
