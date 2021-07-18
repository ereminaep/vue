const { defaults } = require('jest-config');
module.exports = {
    yarn: [...defaults.moduleFileExtensions, 'js', 'json', 'vue'],
    transform: {
        ".*\\.(vue)$": "vue-jest",
        ".*\\.(js)$": "babel-jest"
    }
}