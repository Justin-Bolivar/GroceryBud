import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface FormProps {
  addItem: (newItemName: string) => void;
}
const Form: React.FC<FormProps> = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('please provide value');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };


export default Form;