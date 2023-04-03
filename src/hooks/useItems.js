import { useContext } from 'react';
import ItemsContext from '../Context/ItemsContext';

const useItems = () => {
  const { items } = useContext(ItemsContext);
  return items;
};

export default useItems;
