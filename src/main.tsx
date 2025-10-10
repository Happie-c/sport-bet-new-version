import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { ThemeProvider, ScreenSizeProvider, LanguageProvider } from './contexts'

// Prevent zoom gestures
const preventZoom = (e: Event) => {
  if ((e as any).touches && (e as any).touches.length > 1) {
    e.preventDefault();
  }
};

// Prevent double-tap zoom
let lastTouchEnd = 0;
const preventDoubleTapZoom = (e: Event) => {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
};

// Add event listeners
document.addEventListener('touchstart', preventZoom, { passive: false });
document.addEventListener('touchend', preventDoubleTapZoom, { passive: false });
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
document.addEventListener('gestureend', (e) => e.preventDefault());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <ScreenSizeProvider breakpoint={768}>
          <App />
        </ScreenSizeProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
)