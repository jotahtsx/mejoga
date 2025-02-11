module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }], // Configuração correta para React
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'styled-components',
      {
        ssr: true, // Habilita suporte a SSR (Server-Side Rendering)
        displayName: true, // Adiciona nomes aos componentes no DOM para facilitar debugging
        preprocess: false, // Desativa pré-processamento (útil para testes)
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        [
          'styled-components',
          {
            ssr: false, // Desativa SSR durante os testes
            displayName: false, // Desativa nomes dos componentes durante os testes
            preprocess: false,
          },
        ],
      ],
    },
  },
}
