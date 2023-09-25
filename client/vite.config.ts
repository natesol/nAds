/* tslint:disable */

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

import { VITE_DEFAULT_CLIENT_PORT, VITE_DEFAULT_HOST, VITE_SERVER_URL } from './.env.local';

const PORT = parseInt(VITE_DEFAULT_CLIENT_PORT);
const HOST = VITE_DEFAULT_HOST;
const SERVER_URL = VITE_SERVER_URL;

const SOURCE_PATH = resolve(__dirname, 'src');
const BUILD_PATH = resolve(__dirname, 'dist');
const HTML_TEMPLATE_PATH = resolve(SOURCE_PATH, 'index.html');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: HOST,
        port: PORT,
        proxy: {
            '/api': {
                target: SERVER_URL,
                changeOrigin: true,
            },
        },
    },
    root: SOURCE_PATH,
    resolve: {
        alias: {
            '@': SOURCE_PATH,
        },
    },
    build: {
        outDir: BUILD_PATH,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: HTML_TEMPLATE_PATH,
            },
            output: {
                dir: BUILD_PATH,
            },
        },
    },
});
