module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@components", "./src/client/components"],
          ["@pages", "./src/client/pages"],
          ["@assets", "./src/client/assets"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
};
