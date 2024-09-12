module.exports = {
    presets: ['module:@react-native/babel-preset'],
    env: {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    },
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@src': './src',
                    '@core': './src/core',
                    '@data': './src/data',
                    '@interfaces': './src/interfaces',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@ui': './src/ui',
                },
            },
        ],
        ['module:react-native-dotenv'],
        // '@babel/plugin-proposal-export-namespace-from',
        // 'react-native-reanimated/plugin',
    ],
};
