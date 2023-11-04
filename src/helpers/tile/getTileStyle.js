const hundred = 100;

const getBackgroundPosition = (context) => {
	const { data: { name },
		config: { columnCount, size, sprite }} = context;

	const itemIndex = sprite.find((ele) => ele.name === name).index;
	const x = itemIndex % columnCount;
	const y = (itemIndex - x) / columnCount;

	return `${ -x * size }vMin ${ -y * size }vMin`;
};

const getTileStyle = (context) => {
	const { config: { size, columnCount, rowCount }} = context;

	return {
		width: `${ size }vMin`,
		height: `${ size }vMin`,
		backgroundSize: `${ columnCount * hundred }% ${ rowCount * hundred }%`,
		backgroundPosition: getBackgroundPosition(context),
	};
};

export default getTileStyle;
