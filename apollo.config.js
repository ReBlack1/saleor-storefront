module.exports = {
  client: {
    service: {
      name: "saleor",
      url: "https://hidden-book.herokuapp.com/graphql/",
      includes: ["./**/*.js", "./**/*.ts"],
      excludes: ["**/__tests__/**/*"],
    },
  },
};
