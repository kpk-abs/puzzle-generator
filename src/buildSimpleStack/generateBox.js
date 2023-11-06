import { map } from '@laufire/utils/collection';

const generateBox = ({ data, boxes = [] }) => {
	const type = 'box';

	const generatedBoxes = map(boxes, ({ maxTiles }) => ({
		type,
		maxTiles,
	}));

	return {
		data: [...data, ...generatedBoxes],
	};
};

export default generateBox;
