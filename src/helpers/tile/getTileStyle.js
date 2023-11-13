import { rndBetween } from '@laufire/utils/random';
import getStyle from '../getStyle';

const max = 360;
const min = 0;

const getColor = () => ({
	filter: `hue-rotate(${ rndBetween(min, max) }deg)`,
});

const groups = {
	a: {},
	b: getColor(),
};

const getTileStyle = (context) => {
	const { data: { group }} = context;

	return {
		...getStyle(context),
		...groups[group],
	};
};

export default getTileStyle;
