import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [],
    tutorials: false,
    notifications: {
      releases: false
    },
    head: {},
    translations: {
      en: {
        'Auth.form.welcome.title': 'Acesse sua conta',
        'Auth.form.welcome.subtitle': ' ',
        'Auth.form.email.label': 'E-mail',
        'Auth.form.email.placeholder': 'johndoe@gmail.com',
        'Auth.form.button.login': 'Entrar',
        'Auth.form.rememberMe.label': 'Lembrar-me',
        'Auth.link.forgot-password': 'Esqueceu a senha?',
        'HomePage.header.title': "Olá, {name}",
        'HomePage.header.subtitle': 'Bem-vindo ao seu painel de administração.',
        "app.components.GuidedTour.title": "3 passos para começar",
        'app.components.GuidedTour.home.CTB.title': '🧠 Construa a estrutura de conteúdo',
        "app.components.GuidedTour.home.CTB.cta.title": "Ir para o construtor de tipo de conteúdo",
        "app.components.GuidedTour.home.CM.title": "⚡️ O que você gostaria de compartilhar com seus jogadores?",
        "app.components.GuidedTour.apiTokens.create.title": "🚀 Veja o conteúdo em prática",
        "app.components.GuidedTour.skip": "Pular o Tour",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
