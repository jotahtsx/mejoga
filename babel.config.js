module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }], // <- Habilita o novo transformador de JSX
    '@babel/preset-typescript',
  ],
}
