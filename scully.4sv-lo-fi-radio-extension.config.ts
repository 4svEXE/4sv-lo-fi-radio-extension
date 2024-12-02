import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: '4sv-lo-fi-radio-extension',
  distFolder: './dist/4sv-lo-fi-radio-extension/browser',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {}
};
