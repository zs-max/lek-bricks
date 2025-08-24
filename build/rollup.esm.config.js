import basicConfig,{name,file} from './rollup.config.js'

export default {
    ...basicConfig,
    output: {
        ...basicConfig.output,
        file: file('esm'),
        format: 'es',
    }
}
