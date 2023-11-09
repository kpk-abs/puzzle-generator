import { rndBetween } from '@laufire/utils/lib';
import { generateID } from '../../../helpers';

const genTile = ({ variation, group, value: { min, max }}) => {
	const name = 'carrot';
	const type = 'tile';
	const maxPosition = 101;
	const value = rndBetween(min, max);
	const id = generateID();
	const position = {
		x: rndBetween(0, maxPosition),
		y: rndBetween(0, maxPosition),
	};

	return { id, name, variation, group, type, value, position };
};

export default genTile;
