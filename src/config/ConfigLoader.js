class ConfigLoader {

    constructor() {
        console.log("Config loader called");
        // Presuming that node-config sits under ./external folder in the project
        require.paths.unshift('./conf');

        var conf = require('node-config'),sys = require('sys')

        conf.initConfig(
            function(err) {
                if(err) {
                    sys.log('Unable to init the config: ' + err); 
                    return;
                }
                console.log(conf.db_connection);
            }
        );
    }
}

module.exports = ConfigLoader