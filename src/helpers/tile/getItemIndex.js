const getItem = ({ data, config: { sprite }}) =>
	sprite.find(({ name: itemName }) => itemName === data);

export default getItem;
