
module.exports = {
    TITLE: "澳門摩爾教育-澳門名校補習專家",
    PATH_ROOT: "../src/pages",
    HTML_TEMP_PATH: "../src/core/temp/temp.html",
    pages: ["index"],
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