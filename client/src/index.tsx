import React from 'react';

import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/providers/ThemeProvider';

import ChannelsPage from '@/pages/channels-page';
import ErrorPage from '@/pages/error-page';

import './styles/index.css';
import App from './App';
import HomePage from '@/pages/home-page';

import ChannelDataPage from '@/pages/channel-data-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'channels',
                element: <ChannelsPage />,
            },
            {
                path: 'channels/:channelId',
                element: <ChannelDataPage />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme='dark' storageKey='ui-theme'>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
