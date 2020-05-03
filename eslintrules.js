'use strict';

/**
 * @file INDEX
 * @description The base ESLint config.
 */

/**
 * WARNING!
 * YOU PROBABLY WANT TO MODIFY backend.js OR frontend.js AND NOT THIS FILE!
 */

module.exports = {

  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
  ],

  plugins: [
    "import",
    "json",
    "node",
    "promise",
    "sonarjs",
    "unicorn",
  ],

  parser: "babel-eslint", // Required in both places. Allows ESLint to work with new/advanced ECMAScript features.

  parserOptions: {
    parser: "babel-eslint", // Required in both places. Allows ESLint to work with new/advanced ECMAScript features.
    ecmaVersion: 2019,
    sourceType: "script", // Default to script for Node, extend in frontend.js.
    ecmaFeatures: {
      impliedStrict: false,
    },
  },

  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
    serviceworker: true,
    worker: true,
    mocha: true,
    jquery: true,
  },

  rules: {

    /*
     * ESLint Core Rules
     */
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "callback-return": [2, // Helps avoid silly developer mistakes.
      ["callback", "cb", "finish", "done", "next", "nextItem"]
    ],
    "comma-dangle": [2, { // Tidy git merges.
      "arrays": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline",
      "imports": "always-multiline",
      "objects": "always-multiline",
    }],
    "no-underscore-dangle": "off",
    "consistent-return": 2, // Helps avoid silly developer mistakes.
    "eol-last": [1, "always"], // Tidy whitespace.
    "handle-callback-err": [2, "^err"], // Helps avoid silly developer mistakes.
    "no-await-in-loop": 0, // A perfectly sane language feature.
    "no-caller": 2, // Deprecated feature.
    "no-compare-neg-zero": 1, // Helps avoid silly developer mistakes.
    "no-cond-assign": [2, "except-parens"], // Helps avoid silly developer mistakes.
    "no-confusing-arrow": [2, { // Helps avoid silly developer mistakes.
      "allowParens": true,
    }],
    "no-console": 1, // Prefer to use a proper logger and clear out debug/test logs.
    "no-continue": 0, // A perfectly sane language feature.
    "no-debugger": 1, // Remember to clear these out!
    "no-return-await": 2, // Performance hit - "return await" wraps return value in an unnecessary additional promise.
    "no-throw-literal": 2, // Throwing anything other than an error can result in unexpected behaviour.
    "no-with": 2, // The "with" syntax is considered bad practice.
    "no-var": 2, // Use "const" or "let" as they are block scoped.
    "no-void": 0, // The "void (0)" statement is guaranteed to return "undefined".
    "require-await": 2, // Helps avoid silly developer mistakes.
    "semi": [2, "always"], // JS compiler must guess where to insert semicolons if not included.
    "semi-spacing": [1, { "before": false, "after": true }], // Tidy whitespace.
    "strict": [2, "global"], // The "use strict" directive prevents silly mistakes.
    "yoda": [2, "never"], // Helps avoid silly developer mistakes.

    /*
     * eslint-plugin-node
     */
    "node/no-unpublished-require": ["error", {
      "allowModules": ["chai", "chai-as-promised", "cucumber", "mocha", "nock", "proxyquire", "rewire", "sinon", "sinon-chai", "@spokedev/zola"],
    }],

    /*
     * eslint-plugin-import
     */
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["**/tests/**/*.js", "**/test/**/*.js"],
    }],

    /*
     * eslint-plugin-promise
     */
    "promise/always-return": 0, // Disable a messy default rule in "eslint-plugin-promise".
    "promise/avoid-new": 0, // Disable a useless default rule in "eslint-plugin-promise".
    "promise/catch-or-return": 2, // Helps avoid uncaught promise rejections.
    "promise/no-callback-in-promise": 2, // Helps avoid silly developer mistakes.
    "promise/no-native": 0, // Rely on native promises instead of libraries.
    "promise/no-nesting": 2, // Helps avoid silly developer mistakes.
    "promise/no-new-statics": 2, // Helps avoid silly developer mistakes.
    "promise/no-promise-in-callback": 2, // Helps avoid silly developer mistakes.
    "promise/no-return-wrap": 2, // Performance hit - wraps return value in an unnecessary additional promise.
    "promise/no-return-in-finally": 2, // Avoid unexpected behaviour.
    "promise/param-names": 2, // Helps avoid silly developer mistakes.
    "promise/prefer-await-to-callbacks": 2, // Helps avoid silly developer mistakes.
    "promise/prefer-await-to-then": 2, // Helps avoid silly developer mistakes.
    "promise/valid-params": 2, // Helps avoid silly developer mistakes.

    /*
     * eslint-plugin-unicorn
     */
    "unicorn/catch-error-name": [2, { // Tidyness and consistency.
      "name": "err",
    }],
    "unicorn/import-index": 2, // Tidyness and consistency.
    "unicorn/no-abusive-eslint-disable": 2, // Helps avoid silly developer mistakes.
    "unicorn/no-new-buffer": 2, // Don't use deprecated features.
    "unicorn/no-unsafe-regex": 2, // Performance and security.
    "unicorn/prefer-exponentiation-operator": 2, // Tidyness and consistency.
    "unicorn/prefer-includes": 2, // Tidyness and consistency.
    "unicorn/prefer-type-error": 2, // Tidyness and consistency.
    "unicorn/throw-new-error": 2, // Tidyness and consistency.
    "unicorn/regex-shorthand": 2, // Tidyness and consistency.

  },

};
