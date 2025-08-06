import MoneySlot from './MoneySlot'
import Keyboard from './Keyboard'

export default function Sidebar() {
  return (
    <aside className="w-64 p-6 bg-gray-100 border-l">
      <MoneySlot />
      <Keyboard />
    </aside>
  )
}
