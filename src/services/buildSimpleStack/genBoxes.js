import { map, range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';
import { generateID } from '../../helpers';

const genBoxes = ({ count, items = [], value: { min, max }}) =>
	map(range(0, count), () => ({
		id: generateID(),
		type: 'box',
		value: rndBetween(min, max),
		items: items,
	}));

export default genBoxes;
