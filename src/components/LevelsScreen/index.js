import { map, values } from '@laufire/utils/collection';
import React from 'react';
import Level from './Level';
import generateLevel from '../../services/generateLevel';
import levels from '../../data/levels';
import BackButton from '../BackButton';
import getStyle from '../../helpers/getStyle';

const LevelsScreen = (context) => {
	const { state: { currentLevel }, actions } = context;
	const { data = [] } = currentLevel && generateLevel(currentLevel);

	const levelElements = <div>
		<div className="levels">
			<div className="levelContainer">
				{values(map(levels, ({ label }, key) =>
					<button
						key={ key }
						className="gameButton"
						style={ getStyle({ ...context,
							data: { value: 'level' }}) }
						onClick={ () => { actions.setCurrentLevel(key); } }
					>{ label }</button>))}
			</div>
		</div><BackButton { ...context }/></div>;

	const levelProps = { ...context, data };

	const levelComponent = <Level { ...levelProps }/>;

	return currentLevel ? levelComponent : levelElements;
};

export default LevelsScreen;
