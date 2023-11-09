import { map, range } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import genTile from './genTile';

const genTiles = (tile) => {
	const { count, variations, groups } = tile;
	const variation = rndValue(variations);
	const group = rndValue(groups);

	return map(range(0, count), () => genTile({ ...tile, variation, group }));
};

export default genTiles;
