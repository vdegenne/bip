import {spawn} from 'child_process';

export function bip() {
	spawn('play', ['./audio/beep.mp3']);
}
