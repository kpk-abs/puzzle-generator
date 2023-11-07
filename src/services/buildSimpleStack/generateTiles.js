import { map, range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';
import { rndValue } from '@laufire/utils/random';

const generateTiles = ({ tile }) => {
	const { count, variations, value: { min, max }, groups } = tile;
	const name = 'pencil';
	const type = 'tile';
	const variation = rndValue(variations);
	const group = rndValue(groups);

	return {
		data: map(range(0, count), () => {
			const value = rndBetween(min, max);

			return {
				name,
				variation,
				group,
				type,
				value,
			};
		}),
	};
};

export default generateTiles;
