module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};