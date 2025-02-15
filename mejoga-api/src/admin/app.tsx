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
          primary100: "#030415",  // Fundo principal
          primary200: "#092C4C",  // Azul escuro suave
          primary600: "#0D92F4",  // Azul vibrante principal
          primary700: "#77CDFF",  // Azul mais claro
      
          neutral0: "#0d102f",    // Fundo neutro escuro
          neutral00: "#030415",   // Fundo ainda mais escuro
          neutral100: "#131735",  // Cinza-azulado escuro para contrastes
      
          danger100: "#0D92F4",   // Azul no alerta (diferente do padrão vermelho)
          danger200: "#1B1D36",   // Cinza muito escuro
          danger600: "#FFFFFF",   // Texto do alerta em branco
      
          success100: "#1F9C47",  // Verde escuro para sucesso
          success600: "#48E79E",  // Verde vibrante no hover
      
          warning100: "#C99100",  // Amarelo dourado para alertas
          warning600: "#FFBD4A",  // Laranja suave para ênfase
      
          secondary100: "#0B3D91", // Azul mais escuro para detalhes
          secondary600: "#8AB4F8", // Azul claro para realce
        }
      }
    }
  },
  bootstrap() {
  },
};
