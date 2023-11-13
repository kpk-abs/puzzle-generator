const getPosition = ({ data: { value }, config: { sprite }}) =>
	sprite.find(({ name: itemName }) => itemName === value) || { variance: {}};

export default getPosition;
