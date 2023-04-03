import { useContext } from 'react';
import ItemsContext from '../Context/ItemsContext';

const useItemsManagement = () => {
  const { items, addItem, deleteItem, updateItemTitle, editItem, toggleSelectedItem } =
    useContext(ItemsContext);

  return { items,addItem, deleteItem, updateItemTitle, editItem, toggleSelectedItem };
};
export default useItemsManagement;
