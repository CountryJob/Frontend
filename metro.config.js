const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'cjs'], // ⬅️ JSX, CJS 포함
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
