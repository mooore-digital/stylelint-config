// This config is roughly based on https://github.com/stormwarning/stylelint-config-recess-order

const propertyGroups = require("./groups.js");

module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [
      propertyGroups,
      {
        severity: "warning",
      },
    ],
  },
};
