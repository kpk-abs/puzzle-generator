import { find } from '@laufire/utils/collection';
import getItem from './getItemIndex';
import { rndBetween } from '@laufire/utils/random';

const max = 360;
const min = 0;
const hundred = 100;

const getColor = () => ({
	filter: `hue-rotate(${ rndBetween(min, max) }deg)`,
});

const groups = {
	a: {},
	b: getColor(),
};

const getTileStyle = (context) => {
	const { config: { size, columnCount, themes },
		data: { group }, state: { theme }} = context;
	const { x, y,
		variance: { width, height }} = getItem(context);
	const { url } = find(themes, ({ value }) => theme === value);

	return {
		width: `${ size * width }vMin`,
		height: `${ size * height }vMin`,
		backgroundImage: `url(${ url })`,
		backgroundSize: `${ (columnCount * hundred) / width }%`,
		backgroundPosition: `${ -x }vmin ${ -y }vmin`,
		...groups[group],
	};
};

export default getTileStyle;
