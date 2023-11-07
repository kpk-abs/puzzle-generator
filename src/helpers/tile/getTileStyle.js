import { peek } from '@laufire/utils/debug';
import getItem from './getItemIndex';

const hundred = 100;

const getTileStyle = (context) => {
	const { config: { size, columnCount, rowCount }} = context;
	const { x, y } = peek(getItem(context));

	return {
		width: `${ size }vMin`,
		height: `${ size }vMin`,
		backgroundSize: `${ columnCount * hundred }% ${ rowCount * hundred }%`,
		backgroundPosition: `${ -x }vmin ${ -y }vmin`,
	};
};

export default getTileStyle;
