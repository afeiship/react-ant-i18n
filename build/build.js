import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactAntI18n'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    antd: 'antd',
    i18next: 'i18next',
    'moment':'moment',
    '@feizheng/next-kebab-case':'@feizheng/next-kebab-case',
    '@feizheng/react-i18next-provider': '@feizheng/react-i18next-provider'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
