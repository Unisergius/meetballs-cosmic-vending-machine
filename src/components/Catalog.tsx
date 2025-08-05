import type { RootState } from "@/store"
import type { Item } from "@/types"
import ItemSlot from "@/components/ItemSlot"
import { useSelector } from "react-redux"

export default function Catalog() {

  const items: Item[] = useSelector((state: RootState) => state.items.list)
  
  return (
    <section className="flex-1 p-6 bg-black flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10">
          {items.map(item => (
            <ItemSlot key={item.id} item={item} />
          ))}
        </div>
    </section>
  )
}

