import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1A1F3C',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#11ccff',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff46c7',
                secondary: '#fff',
              },
            },
          }}
        />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);