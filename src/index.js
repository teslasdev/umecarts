import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { GlobalProvider } from './context';
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </QueryClientProvider>
);

