import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from './contexts/UserContext.tsx'
import { SelectedChatContext, SelectedChatContextProvider } from './contexts/SelectedChatContext.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SelectedChatContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>,
      </BrowserRouter>
    </UserContextProvider>
    </SelectedChatContextProvider>
  </React.StrictMode>,
)

