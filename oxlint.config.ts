import { storyOxlintConfig } from '@storytw/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig(
  storyOxlintConfig({
    framework: 'vite',
  }),
);
