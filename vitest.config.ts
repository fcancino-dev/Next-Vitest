import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
// vitest.setup.ts
// import '@testing-library/jest-dom';

 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})