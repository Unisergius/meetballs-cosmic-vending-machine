import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import { addMoney } from '@/store/moneySlice'

export default function MoneySlot() {
  const dispatch = useDispatch<AppDispatch>()

  const handleAddMoney = (amount: number) => {
    dispatch(addMoney(amount))
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Insert Money</h3>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => handleAddMoney(1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Insert $1
        </button>
        <button
          onClick={() => handleAddMoney(5)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Insert $5
        </button>
      </div>
    </div>
  )
}
