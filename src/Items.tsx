import React from 'react';
import SingleItem from './SingleItem';

interface Item {
  id: string;
  name: string;
  completed: boolean;
}

interface ItemsProps {
  items: Item[];
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
}

const Items: React.FC<ItemsProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item: Item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
