/* tslint:disable */

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

const DEFAULT_PORT = 3000;
const DEFAULT_HOST = '127.0.0.1';
const DEFAULT_SERVER_URL = process.env.VITE_SERVER_URL || `http://${DEFAULT_HOST}:8000`;
const DEFAULT_ROOT_PATH = resolve(__dirname, 'src');
const DEFAULT_BUILD_PATH = resolve(__dirname, 'dist');
const DEFAULT_HTML_TEMPLATE_PATH = resolve(DEFAULT_ROOT_PATH, 'index.html');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: DEFAULT_HOST,
        port: parseInt(process.env.VITE_PORT) || DEFAULT_PORT,
        proxy: {
            '/api': {
                target: DEFAULT_SERVER_URL,
                changeOrigin: true,
            },
        },
    },
    root: DEFAULT_ROOT_PATH,
    resolve: {
        alias: {
            '@': DEFAULT_ROOT_PATH,
        },
    },
    build: {
        outDir: DEFAULT_BUILD_PATH,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: DEFAULT_HTML_TEMPLATE_PATH,
            },
            output: {
                dir: DEFAULT_BUILD_PATH,
            },
        },
    },
});
