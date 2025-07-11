import {spawn} from 'child_process';

export default function () {
	spawn('play', ['./audio/beep.mp3']);
}
