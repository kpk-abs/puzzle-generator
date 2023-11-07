const getItem = ({ data: { value }, config: { sprite }}) =>
	sprite.find(({ name: itemName }) => itemName === value);

export default getItem;
