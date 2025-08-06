import type { ItemSlotProps } from '@/types'
/**/

const ItemSlot: React.FC<ItemSlotProps> = ({ item }) => {
  return (
    <div className="relative inline-flex group">
      <div
          className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
      </div>
      <a href="#" title="Get quote now"
          className="relative flex-col w-full h-64 inline-flex items-center justify-between px-4 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button">
          <img src={item.imageUrl ?? "/img/drink-item.png"} alt={item.name} className="w-32 h-32 mb-2 rounded-lg" />
          <h3 className="font-bold">{item.name}</h3>
          <div className="flex flex-row items-center justify-between w-full  px-4">
            <p className="text-2xl text-fuchsia-300" >${item.price.toFixed(2)}</p>
            <p className="text-sm text-green-300">{item.quantity}</p>
          </div>
      </a>
    </div>
  );
};

export default ItemSlot;

