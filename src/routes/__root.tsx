import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from './-components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const Route = createRootRoute({
  component: RootComponent,
})

const queryClient = new QueryClient()

function RootComponent() {
  return (
    <>
        <QueryClientProvider client={queryClient}>
            <Header />
            <Outlet />
        </QueryClientProvider>
    </>
  )
}
