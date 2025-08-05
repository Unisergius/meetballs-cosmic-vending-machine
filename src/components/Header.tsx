
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

export default function Header() {
  const money = useSelector((state: RootState) => state.money.amount)
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow">
      <div className="font-bold text-xl">Cosmic Vending Machine</div>
      <div className="text-lg">Money: ${money}</div>
    </header>
  )
}
