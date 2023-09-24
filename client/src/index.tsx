import React from 'react';

import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@/components/providers/ThemeProvider.tsx';

import App from './App.tsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
