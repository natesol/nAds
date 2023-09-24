/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APPLICATION_MODE: string;
    readonly VITE_IS_DEBUG_MODE: string;
    readonly VITE_DEFAULT_HOST: string;
    readonly VITE_DEFAULT_CLIENT_PORT: string;
    readonly VITE_DEFAULT_SERVER_PORT: string;
    readonly VITE_CLIENT_URL: string;
    readonly VITE_SERVER_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
