// This config is roughly based on https://github.com/kutsan/stylelint-config-clean-order/

const { positioning } = require("./groups/positioning");
const { layout } = require("./groups/layout");
const { boxModel } = require("./groups/box-model");
const { appearance } = require("./groups/appearance");
const { typography } = require("./groups/typography");
const { interaction } = require("./groups/interaction");
const { transition } = require("./groups/transition");
const { svgPresentation } = require("./groups/svg-presentation");

const propertyGroups = [
  ["composes"],
  ["all"],
  interaction,
  positioning,
  layout,
  boxModel,
  typography,
  appearance,
  svgPresentation,
  transition,
];

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: "threshold",
  properties,
}));

const config = {
  plugins: ["stylelint-order"],
  rules: {
    "order/order": [
      [
        { type: "at-rule", name: "import" },
        { type: "at-rule", name: "forward" },
        { type: "at-rule", name: "use" },
        "dollar-variables",
        "at-variables",
        "custom-properties",
        { type: "at-rule", name: "custom-media" },
        { type: "at-rule", name: "function" },
        { type: "at-rule", name: "mixin" },
        { type: "at-rule", name: "extend" },
        { type: "at-rule", name: "include" },
        "declarations",
        {
          type: "rule",
          selector: /^&::[\w-]+/,
          hasBlock: true,
        },
        "rules",
        { type: "at-rule", name: "media", hasBlock: true },
      ],
      {
        severity: "warning",
      },
    ],
    "order/properties-order": [
      propertiesOrder,
      {
        severity: "warning",
        unspecified: "bottomAlphabetical",
        emptyLineBeforeUnspecified: "always",
        emptyLineMinimumPropertyThreshold: 5,
      },
    ],
  },
};

module.exports = config;
