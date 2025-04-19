module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      '@next/next/no-async-client-component': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn', // or 'off'
      'react/no-unescaped-entities': 'warn' // or 'off'
    }
  }
  