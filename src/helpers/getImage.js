import { find } from '@laufire/utils/collection';

const getImage = (context) => {
	const { config: { themes }, state: { theme }} = context;

	return find(themes, ({ value }) => theme === value);
};

export default getImage;
