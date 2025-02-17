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
      logo: Logo,
      expanded: true
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#030415",  // Fundo principal
          primary200: "#092C4C",  // Azul escuro suave
          primary600: "#0D92F4",  // Azul vibrante principal
          primary700: "#77CDFF",  // Azul mais claro
      
          neutral0: "#0d102f",    // Fundo neutro escuro
          neutral00: "#030415",
          neutral100: "#131735",
      
          danger100: "#0D92F4",
          danger200: "#1B1D36",
          danger600: "#FFFFFF",
      
          success100: "#1F9C47",
          success600: "#48E79E",
      
          warning100: "#C99100",
          warning600: "#FFBD4A",
      
          secondary100: "#0B3D91",
          secondary600: "#8AB4F8",
        }
      }
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap() {
  },
};
