import basicConfig,{name,file} from './rollup.config.js'

export default {
    ...basicConfig,
    output: {
        ...basicConfig.output,
        name:'LegoComponents',
        file: file('umd'),
        format: 'umd',
        exports: 'named',
    }
}
