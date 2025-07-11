import {config, nodeResolve, terser, typescript} from '@vdegenne/rollup';

export default config([
	{
		input: './src/index.ts',
		output: {file: './dist/index.js'},
		plugins: [
			typescript(),
			nodeResolve(), //
			terser(),
		],
	},
]);
