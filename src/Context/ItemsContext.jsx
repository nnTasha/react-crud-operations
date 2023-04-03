import { createContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const ItemsContext = createContext();

export const guid = () => uuid();

export function ItemsProvider({ children }) {
  const [items, setItems] = useLocalStorage('items', []);

  const addItem = (input) => {
    if (!input) return;
    const item = {
      id: guid(),
      title: input,
      checked: false,
      editable: false,
    };
    setItems((prevState) => [...prevState, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const editedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          editable: true,
        };
      }
      return item;
    });
    setItems(editedItems);
  };

  const updateItemTitle = (newValue) => {
    const updatedItems = items.map((item) => {
      if (item.editable === true) {
        return {
          ...item,
          title: newValue,
          editable: false,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const toggleSelectedItem = (id) => {
    const selectedItemId = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setItems(selectedItemId);
  };

  const getUncheckedItem = (event) => {};

  const updateUncheckedListItem = (id) => {
    // const itemToUpdate = uncheckedItems.find((item) => item.id == id)
    // setCheckedItems(prevItems => [
    //   ...prevItems,
    //   {
    //     ...itemToUpdate, status : true
    //   }
    // ]);
    // setUncheckedItems(prevItems =>
    //   prevItems.filter(item => {
    //     return item.id != itemToUpdate.id
    //   })
    // )
  };

  const updateCheckedListItem = (id) => {
    // const itemToUpdate = checkedItems.find((item) => item.id == id)
    // setUncheckedItems(prevItems => [
    //   ...prevItems,
    //   {
    //     ...itemToUpdate, status : false
    //   }
    // ]);
    // setCheckedItems(prevItems =>
    //   prevItems.filter(item => {
    //     return item.id != itemToUpdate.id
    //   })
    // )
  };

  // const clickHandler = (event) => {

  //   if (event.type === "change" && event.target.checked) {

  //     const itemToUpdateId = getCheckedItem(event);
  //     console.log(itemToUpdateId)
  //    updateUncheckedListItem(itemToUpdateId);
  //   } else {

  //     const uncheckedItem = getUncheckedItem(event);
  //     updateCheckedListItem(uncheckedItem)
  //   }
  // }

  const context = {
    items,
    addItem,
    deleteItem,
    updateItemTitle,
    editItem,
    toggleSelectedItem,
  };

  return (
    <ItemsContext.Provider value={context}>{children}</ItemsContext.Provider>
  );
}

export default ItemsContext;
