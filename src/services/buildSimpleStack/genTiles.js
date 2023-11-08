import { map, range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';
import { rndValue } from '@laufire/utils/random';
import { generateID } from '../../helpers';

const genTiles = (tile) => {
	const { count, variations, value: { min, max }, groups } = tile;
	const name = 'pencil';
	const type = 'tile';
	const variation = rndValue(variations);
	const group = rndValue(groups);

	return map(range(0, count), () => {
		const value = rndBetween(min, max);
		const id = generateID();

		return { id, name, variation, group, type, value };
	});
};

export default genTiles;
