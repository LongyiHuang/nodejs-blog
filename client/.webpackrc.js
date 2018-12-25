export default

{
 "entry": "src/index.js",
 "disableCSSModules": false,

  "es5ImcompatibleVersions":true,
  "proxy": {
          "/api": {
              "target": "http://localhost:7000/",
              "changeOrigin": true,
              "pathRewrite": {"^/api": ""}
          }

  },
  "extraBabelPlugins": [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],

  "env": {
      "development": {
        "extraBabelPlugins": [
          "dva-hmr"
        ]
      }
    }
}
