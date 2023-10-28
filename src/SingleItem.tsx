import React from 'react';

interface SingleItemProps {
  item: {
    id: string;
    completed: boolean;
    name: string;
  };
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
}

export default SingleItem;
