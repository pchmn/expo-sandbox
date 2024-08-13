const { withAndroidStyles } = require("expo/config-plugins");

function withMaterialTheme(config) {
  return withAndroidStyles(config, async (config) => {
    config.modResults = updateAppThemeStyle(config.modResults);
    return config;
  });
}

function updateAppThemeStyle(styles) {
  const appTheme = styles.resources.style.find(
    (style) => style.$.name === "AppTheme"
  );
  appTheme.$.parent = "Theme.MaterialComponents.Light.NoActionBar";

  return styles;
}

module.exports = withMaterialTheme;
