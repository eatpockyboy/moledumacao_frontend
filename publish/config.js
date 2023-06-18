
module.exports = {
    TITLE: "test system",
    PATH_ROOT: "../src/pages",
    HTML_TEMP_PATH: "../src/core/temp/temp.html",
    pages: ["index", "login"],
    isDebug: true,
    devOption: {
        port: 9552,
        open: true,
        hot: true,
        allowedHosts: "all",
        proxy: {
            '/api': 'http://localhost:9551',
        }
    }
};