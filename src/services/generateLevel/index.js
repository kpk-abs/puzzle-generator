import config from '../../core/config';
import buildSimpleStack from './buildSimpleStack';

const actions = {
	stack: buildSimpleStack,
};

const generateLevel = (levelName) => {
	const { data: { levels }} = config;
	const { type, items, time } = levels[levelName];

	return { ...actions[type](items), time };
};

export default generateLevel;
