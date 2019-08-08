import { Config } from '@stencil/core';
import { less } from '@stencil/less';
import builtins from 'rollup-plugin-node-builtins';

export const config: Config = {
  namespace: 'tokes-payments-component',
  plugins: [
    less({
      injectGlobalPaths: [
        'src/globals/variables.less',
      ]
    }),
    builtins()
  ],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    { type: 'www' }
  ],
  enableCache: false,
  globalStyle: 'src/globals/app.css'
};
