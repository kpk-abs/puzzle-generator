const hundred = 100;

const getItem = ({ data: { name }, config: { sprite }}) =>
	sprite.find(({ name: itemName }) => itemName === name);

const getTileStyle = (context) => {
	const { config: { size, columnCount, rowCount }} = context;
	const { x, y } = getItem(context);

	return {
		width: `${ size }vMin`,
		height: `${ size }vMin`,
		backgroundSize: `${ columnCount * hundred }% ${ rowCount * hundred }%`,
		backgroundPosition: `${ -x }vmin ${ -y }vmin`,
	};
};

export default getTileStyle;
