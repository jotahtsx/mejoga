import favicon from './extensions/favicon.png';
import Logo from './extensions/logo.svg';

export default {
  config: {
    auth: {
      logo: Logo
    },
    head: {
      favicon: favicon
    },
    locales: [
      'pt-BR',
    ],
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to MeJoga',
        'Auth.form.welcome.subtitle': 'Log in to your account'
      }
    },
    menu: {
      logo: Logo
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#030415",
          primary600: "#7A1CAC",
          primary700: "#AD49E1",
          neutral0: "#0d102f",
          neutral00: "#030415",
          danger600: '#AD49E1',
        }
      }
    }
  },
  bootstrap() {
  },
};
