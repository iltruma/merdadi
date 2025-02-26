import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/merdadi/' // Sostituisci con il nome esatto del tuo repository
});
