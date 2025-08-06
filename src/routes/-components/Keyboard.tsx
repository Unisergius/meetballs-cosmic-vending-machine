import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@/store'
import { selectItem, clearSelection, purchaseItem } from '@/store/itemsSlice'
import { subtractMoney } from '@/store/moneySlice'

export default function Keyboard() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const money = useSelector((state: RootState) => state.money.amount)
  const items = useSelector((state: RootState) => state.items.list)
  const selectedId = useSelector((state: RootState) => state.items.selectedId)

  const handleNumberClick = (num: number) => {
    if (input.length < 2) { // Limit to 2 digits
      setInput(prev => prev + num)
    }
  }

  const handleClear = () => {
    setInput('')
    dispatch(clearSelection())
  }

  const handleEnter = () => {
    const itemId = input.padStart(2, '0')
    dispatch(selectItem(itemId))
    const selectedItem = items.find(item => item.id === itemId)
    
    if (selectedItem) {
      if (selectedItem.quantity <= 0) {
        alert('Item out of stock!')
        return
      }
      if (money >= selectedItem.price) {
        dispatch(purchaseItem(itemId))
        dispatch(subtractMoney(selectedItem.price))
        alert(`Dispensing ${selectedItem.name}!\nRemaining balance: $${(money - selectedItem.price).toFixed(2)}`)
        setInput('')
        dispatch(clearSelection())
      } else {
        alert(`Insufficient funds! Item costs $${selectedItem.price.toFixed(2)}`)
      }
    } else {
      alert('Invalid item selection!')
    }
  }

  useEffect(() => {
    if (input.length === 2) {
      dispatch(selectItem(input))
    } else {
      dispatch(clearSelection())
    }
  }, [input, dispatch])

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Select Item</h3>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-center text-xl border rounded bg-gray-50"
          placeholder="##"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
          >
            {num}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="bg-red-500 text-white hover:bg-red-600 p-3 rounded"
        >
          C
        </button>
        <button
          onClick={() => handleNumberClick(0)}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          0
        </button>
        <button
          onClick={handleEnter}
          className="bg-green-500 text-white hover:bg-green-600 p-3 rounded"
        >
          ↵
        </button>
      </div>
    </div>
  )
}
