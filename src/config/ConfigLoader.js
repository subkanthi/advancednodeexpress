var config  = require('config');

/**
 * Wrapper Class to wrap node-config.
 * Just to make sure application doesnt have to be modified
 * if node-config library is replaced with an alternative
 */
class ConfigLoader {

    constructor() {

    }

    /**
     * Function to check if the value exists.
     * true if exists, false otherwise
     * @param {} key 
     */
    hasValue(key) {
        return config.has(key);
    }

    /**
     * Function to get the value for key
     */
    get(key) {
        return config.get(key);
    }

}

module.exports = ConfigLoader