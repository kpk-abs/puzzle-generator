import { map, range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';

const generateBoxes = ({ data, box: { count, value: { min, max }}}) => {
	const generatedBoxes = map(range(0, count), () => ({
		type: 'box',
		value: rndBetween(min, max),
	}));

	return {
		data: [...data, ...generatedBoxes],
	};
};

export default generateBoxes;
