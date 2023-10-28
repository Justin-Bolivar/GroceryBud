import React, { useState } from 'react'; // Import the Items component
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import Form from './Form';
import Items from './Items';

interface Item {
  name: string;
  completed: boolean;
  id: string;
}

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list) as Item[];
  } else {
    return [] as Item[];
  }
}

const setLocalStorage = (items: Item[]) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const defaultList: Item[] = getLocalStorage();

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(defaultList);

  const addItem = (itemName: string) => {
    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  }

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted');
  }

  const editItem = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem: Item = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}
export default App;
