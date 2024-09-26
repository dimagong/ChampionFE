const {defaults: tsjPreset} = require('ts-jest/presets')

module.exports = {
    ...tsjPreset,
    preset: 'react-native',
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!@react-native|react-native|react-navigation|@react-navigation|native-stack|react-redux|@stripe/stripe-react-native|@react-navigation/native)',
    ],
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.jest.json',
            },
        ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '@core/(.*)': '<rootDir>/src/core/$1',
        '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
        '@data/(.*)': '<rootDir>/src/data/$1',
        '@screens/(.*)': '<rootDir>/src/screens/$1',
        '@store/(.*)': '<rootDir>/src/store/$1',
        '@ui/(.*)': '<rootDir>/src/ui/$1',
        '@env': '<rootDir>/.env',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    setupFiles: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    fakeTimers: {
        enableGlobally: true,
    },
    verbose: true,
}

// module.exports = {
//   preset: 'react-native',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
//   //
//   moduleDirectories: ['./node_modules', 'src'],
//   cacheDirectory: '.jest/cache',
//   transformIgnorePatterns: [
//       '<rootDir>/node_modules/(?!@react-native|react-native|react-navigation|@react-navigation|native-stack)',
//   ],
//   moduleNameMapper: {
//       '^[./a-zA-Z0-9$_-]+\\.svg$': '<rootDir>/tests/SvgStub.js',
//   },
//   //setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
//   modulePathIgnorePatterns: ['<rootDir>/packages/'],
//   watchPathIgnorePatterns: ['<rootDir>/node_modules'],
// };
