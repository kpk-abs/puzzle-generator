import { rndBetween } from '@laufire/utils/lib';
import { generateID } from '../../helpers';

const genTile = ({ variation, group, value: { min, max }}) => {
	const name = 'carrot';
	const type = 'tile';
	const value = rndBetween(min, max);
	const id = generateID();

	return { id, name, variation, group, type, value };
};

export default genTile;
