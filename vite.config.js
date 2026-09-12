import { defineConfig } from 'vite';
// TODO: clean this up
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: { port: 5173 },
});
