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
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.js',
                    '.jsx',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
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
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: '.env',
                safe: false,
                allowUndefined: true,
                blocklist: null,
                allowlist: null,
                verbose: false,
            },
        ],
        // '@babel/plugin-proposal-export-namespace-from',
        // 'react-native-reanimated/plugin',
    ],
}
