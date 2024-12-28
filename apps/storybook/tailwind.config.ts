import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./index.html', '../../packages/design-system/src/**/*.{ts,tsx,html,stories.tsx}'],
  presets: [sharedConfig]
};

export default config;
