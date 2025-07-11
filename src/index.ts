import {spawn} from 'child_process';

export default function () {
	spawn('play', [`${import.meta.dirname}/../audio/beep.mp3`]);
}
