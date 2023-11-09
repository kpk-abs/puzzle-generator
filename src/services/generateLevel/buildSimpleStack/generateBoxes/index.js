import genBoxes from './genBoxes';

const generateBoxes = ({ data, boxes, box }) => {
	const generatedBoxes = boxes || genBoxes(box);

	return {
		data: [...data, ...generatedBoxes],
	};
};

export default generateBoxes;
