import { map, values } from '@laufire/utils/collection';
import React from 'react';
import Level from './Level';
import levels from '../../data/levels';
import BackButton from '../BackButton';
import getStyle from '../../helpers/getStyle';

const LevelsScreen = (context) => {
	const { state: { level }, actions } = context;

	const levelElements = <div>
		<div className="levels">
			<div className="levelContainer">
				{values(map(levels, ({ label, name }) =>
					<button
						key={ name }
						className="gameButton"
						style={ getStyle({ ...context,
							data: { value: 'level' }}) }
						onClick={ () => { actions.setLevel(name); } }
					>{ label }</button>))}
			</div>
		</div><BackButton { ...context }/></div>;

	const levelComponent = <Level { ...context }/>;

	return level.name ? levelComponent : levelElements;
};

export default LevelsScreen;
