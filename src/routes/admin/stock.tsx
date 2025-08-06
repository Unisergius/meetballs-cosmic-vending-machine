import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/stock')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/stock"!</div>
}
