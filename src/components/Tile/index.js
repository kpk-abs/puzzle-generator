/* eslint-disable max-lines-per-function */
import React from 'react';
import Item from './Item';
import Number from './Number';
import Audio from './Audio';
import Dice from './Dice';
import MediaPlayer from 'react-web-components/MediaPlayer';
import dragAudio from '../../assets/drag1.mp3';
import { peek } from '@laufire/utils/debug';

const tiles = {
	image: Item,
	number: Number,
	audio: Audio,
	dice: Dice,
};

const Tile = (context) => {
	const { data: { variation = 'number' },
		state: { audioStatus }, setState } = context;
	const Component = tiles[variation];
	const value = {
		type: 'audio',
		mode: 'normal',
		loop: false,
		controls: false,
		volume: 0.5,
		muted: false,
		pip: false,
		played: 0,
		loaded: 0,
		duration: 0,
		playbackRate: 1.0,
		url: dragAudio,
		status: audioStatus[dragAudio],
	};
	const onChange = (event) => {
		const { target } = event;

		target.value.status === 'ended' && setState((prev) => ({ ...prev,
			audioStatus: {
				...audioStatus,
				[dragAudio]: 'ready',
			}}));
	};
	const playAudio = (audio) => {
		peek('down');

		setState((prev) =>
			({ ...prev, audioStatus: {
				...audioStatus,
				[audio]: 'playing',
			}}));
	};

	return (
		<div
			className="tile"
			onMouseDown={ () => playAudio(dragAudio) }
		>
			<Component { ...context }/>
			<MediaPlayer { ...{ value, onChange } }/>
		</div>);
};

export default Tile;
