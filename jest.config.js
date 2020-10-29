module.exports = {
    moduleFileExtensions: [
        "js",
        "jsx"
    ],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    // 指定需要进行单元测试的文件匹配规则
    testRegex: "(/__tests__/.*|(\\.|/)test)\\.(js|jsx)?$",
    // 需要忽略的文件匹配规则
    testPathIgnorePatterns: [
        '/node_modules'
    ],
    testURL: 'http://localhost/',
    // 是否收集测试覆盖率，以及覆盖率文件路径
    collectCoverage: true,
    coverageDirectory: './coverage',
    setupFiles: ['./test/setup.js'],
    // snapshotSerializers: ["enzyme-to-json/serializer"],
};
