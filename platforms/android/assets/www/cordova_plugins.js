cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.rhalff.sensors.sensors",
        "file": "plugins/com.rhalff.sensors/www/sensors.js",
        "pluginId": "com.rhalff.sensors",
        "clobbers": [
            "sensors"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "com.rhalff.sensors": "0.7.0"
};
// BOTTOM OF METADATA
});