import config from './core/config';
import buildSimpleStack from './buildSimpleStack';

const actions = {
	stack: buildSimpleStack,
};

const generateLevel = (levelName) => {
	const { data: { levels }} = config;
	const { type, items } = levels[levelName];

	return actions[type](items);
};

export default generateLevel;
