module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => {
    console.log('Arquivos formatados:', filenames)
    return [
      `npx prettier --write ${filenames.join(' ')}`,
      `npx eslint --fix ${filenames.join(' ')}`,
    ]
  },
}
