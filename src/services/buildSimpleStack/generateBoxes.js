import { map, range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';
import { generateID } from '../../helpers';

const generateBoxes = ({
	data,
	boxes,
	box: { count, items = [], value: { min, max }},
}) => {
	const generatedBoxes = boxes || map(range(0, count), () => ({
		id: generateID(),
		type: 'box',
		value: rndBetween(min, max),
		items: items,
	}));

	return {
		data: [...data, ...generatedBoxes],
	};
};

export default generateBoxes;
