import { createFileRoute } from '@tanstack/react-router'
import Catalog from './-components/Catalog'
import Sidebar from './-components/Sidebar'

export const Route = createFileRoute('/vendingmachine')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className='flex flex-row min-h-screen'>
        <Catalog />
        <Sidebar />
      </main>
}
