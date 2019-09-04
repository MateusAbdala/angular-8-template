// This is NOT FOR PRODUCTION, This configuration is ONLY for your development setup and should not be used in production.
const PROXY_CONFIG = {
    "/api": {
        "target": "http://google.com",
        "secure": false,
        "pathRewrite": {
            "^/api": ""
        },
        "changeOrigin": true
    }
}

module.exports = PROXY_CONFIG;
