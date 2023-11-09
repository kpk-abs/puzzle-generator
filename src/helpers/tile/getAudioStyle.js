import AudioImage from '../../Images/Audio.png';

const getAudioStyle = (size) => ({
	width: `${ size }vMin`,
	height: `${ size }vMin`,
	backgroundSize: 'cover',
	borderRadius: '50%',
	backgroundImage: `url(${ AudioImage })`,
});

export default getAudioStyle;
