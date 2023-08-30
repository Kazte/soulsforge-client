import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
        <Analytics />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
)
