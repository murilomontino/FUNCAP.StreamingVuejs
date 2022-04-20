module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [],
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    semi: ["error", "never"],
    "comma-dangle": 0,
    quotes: ["error", "double"],
    "linebreak-style": ["error", "unix"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "@typescript-eslint/no-explicit-any": "off",
    "space-before-function-paren": ["error", "always"],

  },
  parserOptions: {
    parser: "babel-eslint",
  },
  globals: {
    Waypoint: true,
  },
}
