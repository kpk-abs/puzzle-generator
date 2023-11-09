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
	const { config: { size, columnCount, rowCount },
		data: { group }, state: { theme }} = context;
	const { x, y,
		variance: { width, height }} = getItem(context);

	return {
		width: `${ size * width }vMin`,
		height: `${ size * height }vMin`,
		backgroundImage: `url(${ theme.url })`,
		backgroundSize: `${ (columnCount * hundred) / width }% ${ (rowCount * hundred) / height }%`,
		backgroundPosition: `${ -x }vmin ${ -y }vmin`,
		...groups[group],
	};
};

export default getTileStyle;
