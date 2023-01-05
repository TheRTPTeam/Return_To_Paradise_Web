import designSystem from 'components/design_system/design_system.module.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: designSystem.colorLightBg,
      },
      {
        name: 'dark',
        value: designSystem.colorDarkBg,
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
