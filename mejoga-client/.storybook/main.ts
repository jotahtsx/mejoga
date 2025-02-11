import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/Components/**/stories.tsx'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: (config) => {
    if (config.resolve && Array.isArray(config.resolve.modules)) {
      config.resolve.modules.push(`${process.cwd()}/src`)
    }
    return config
  },
  staticDirs: ['../public'],
}
export default config
