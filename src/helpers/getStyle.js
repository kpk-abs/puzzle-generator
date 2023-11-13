import getImage from './getImage';
import getPosition from './getPosition';

const hundred = 100;

const getStyle = (context) => {
	const { config: { columnCount, size }} = context;
	const { x, y,
		variance: { width, height }} = getPosition(context);
	const { url } = getImage(context);

	return {
		width: `${ size * width }vMin`,
		height: `${ size * height }vMin`,
		backgroundImage: `url(${ url })`,
		backgroundSize: `${ (columnCount * hundred) / width }%`,
		backgroundPosition: `${ -x }vmin ${ -y }vmin`,
	};
};

export default getStyle;
