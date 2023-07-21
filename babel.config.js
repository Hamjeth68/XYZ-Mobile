module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@/components": "./src/components",
            "@/layouts": "./src/layouts",
            "@/screens": "./src/screens",
            "@/utils": "./utils",
            "@/mirage": "./mirage",
            "@/assets": "./src/assets",
            "@/styles": "./styles",
            "@/i18n": "./src/i18n",
            "@/features": "./src/features",
            "@/models": "./src/models",
            "@/services": "./src/services",
            "@/twilio": "./src/twilio",
            "@/src": "./src",
            "@/hooks": "./src/hooks",
            "@/fixtures": "./src/__fixtures_",
            "@/forms": "./src/forms",
            "@/modules": "./src/customModules",
          },
        },
      ],
    ],
  };
};