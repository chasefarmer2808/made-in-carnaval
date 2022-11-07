const path = require("path");

module.exports = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
    domains: [{ domain: "madeinrio2023.com", defaultLocale: "en-US" }],
    localePath: path.resolve("./public/static/locales"),
  },
};
