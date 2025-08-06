import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vendingmachine')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/vendingmachine"!</div>
}
