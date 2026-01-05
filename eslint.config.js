import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import _import from 'eslint-plugin-import'
import { fixupPluginRules } from '@eslint/compat'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'

export default defineConfig([
  // Ignore build and dependency folders
  {
    ignores: ['node_modules/**', 'lib/**', 'webpack.config.js']
  },

  // JavaScript linting
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      import: fixupPluginRules(_import),
      prettier: fixupPluginRules(prettier)
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-extra-semi': 'error',
      indent: 'off',
      'prettier/prettier': [
        'error',
        {
          semi: false,
          tabWidth: 2,
          useTabs: false
        }
      ],
      'import/extensions': ['error', 'always', { ignorePackages: true }],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always'
        }
      ]
    }
  },

  // Vue linting
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: 'espree',
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      vue
    },
    rules: {
      ...vue.configs['flat/recommended'].rules
    }
  }
])
