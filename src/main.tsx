import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Outlet } from '@tanstack/react-router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '@/store'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
