import React from 'react';
import Item from './Item';
import Number from './Number';
import Audio from './Audio';
import Dice from './Dice';
import MediaPlayer from 'react-web-components/MediaPlayer';
import dragAudio from '../../assets/drag1.mp3';
import Line from './Line';
import audioManager from '../../helpers/audioManager';
const tiles = {
	image: Item,
	number: Number,
	audio: Audio,
	dice: Dice,
	line: Line,
};

const Tile = (context) => {
	const { data: { variation = 'number' },
		state: { audioStatus, audio }} = context;
	const Component = tiles[variation];
	const value = { ...audioManager.staticProps,
		muted: !audio, url: dragAudio, status: audioStatus[dragAudio] };
	const onChange = (event) => audioManager.onChange(
		event, context, dragAudio
	);

	return (
		<div
			className="tile"
			onMouseDown={ () =>
				audioManager.playAudio({ ...context, data: dragAudio }) }
		>
			<Component { ...context }/>
			<MediaPlayer { ...{ value, onChange } }/>
		</div>);
};

export default Tile;
