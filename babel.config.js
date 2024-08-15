module.exports = {
  "env": {
      "test": {
        "plugins": [
            ["@babel/plugin-proposal-decorators", { "version": "2023-11" }]
        ],
          "presets": [
              "@babel/preset-env",
              '@babel/preset-typescript'
          ],
      }
  }
}