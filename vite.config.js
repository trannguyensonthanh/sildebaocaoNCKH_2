// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // base: './' là chìa khóa để đảm bảo mọi thứ hoạt động
  // sau khi build và trên server dev.
  base: './',
  server: {
    allowedHosts: ['guided-wallaby-measured.ngrok-free.app'],
  },
});
