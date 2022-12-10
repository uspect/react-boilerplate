import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: Number(process.env.VITE_APP_PORT) || 8888,
  },
  plugins: [react()],
});
