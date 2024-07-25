const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/client/components"),
    "@pages": path.resolve(__dirname, "src/client/pages"),
    "@assets": path.resolve(__dirname, "src/client/assets"),
    "@redux": path.resolve(__dirname, "src/client/redux"),
  })
);
