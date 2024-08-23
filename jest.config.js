module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '.*\\.(j|t)sx?$': ['@swc/jest'],
    },
    transformIgnorePatterns: [],
}