module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      {
        usePrettierrc: false,
        singleQuote: true,
        parser: "flow",
      },
      {
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
  },
};
