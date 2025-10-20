//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    files: ['*.config.js', '*.config.ts'],
    rules: {
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    ignores: ['*.config.js'],
  },
]
