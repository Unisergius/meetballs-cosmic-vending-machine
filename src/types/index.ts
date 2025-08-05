export interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string; 
  selected?: boolean; 
}

export interface ItemsState {
  list: Item[];
  selectedId: string | null;
}

export interface MoneyState {
  amount: number;
}

export interface ItemSlotProps {
  item: Item;
}

export interface RootState {
  items: ItemsState;
  money: MoneyState;
}
