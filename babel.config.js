module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], 
        alias: {
          components: './src/components',
          localization: './src/localization',
          screens: './src/screens',
          styles: './src/styles',
          types: './src/types',
        },
      },
    ],
  ],
};