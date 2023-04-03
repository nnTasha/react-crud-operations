import { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import CheckBox from '../check-box/CheckBox';
import useItemsManagement from '../../../hooks/useItemsManagement';

const ItemList = ({ items }) => {
  const { deleteItem, updateItemTitle, editItem, toggleSelectedItem } =
    useItemsManagement();

  const [newValue, setNewValue] = useState('');

  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    setNewValue(inputValue);
  };

  const onSaveHandler = () => {
    updateItemTitle(newValue);
  };

  return (
    <Container>
      <ul>
        {items.map((item) => (
          <li className="list-item" key={item.id}>
            <CheckBox
              selectItemHandler={() => {
                toggleSelectedItem(item.id);
              }}
              isChecked={item.checked}
            />
            <input
              type="text"
              className={`input ${item.editable ? 'editable' : ''}`}
              defaultValue={item.title}
              readOnly={!item.editable}
              onChange={onChangeHandler}
            />
            <div className="list-item-control">
              {item.editable ? (
                <Button title="Save" onClick={onSaveHandler} width="3rem" />
              ) : (
                <Button
                  title="Edit"
                  onClick={() => editItem(item.id)}
                  width={'3rem'}
                />
              )}
              <Button title="X" onClick={() => deleteItem(item.id)} />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ItemList;

const Container = styled.div`
  width: 100%;
  height: 25rem;
  padding-top: 1rem;

  .list-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin: 5px;

    .input {
      height: 2rem;
      background-color: inherit;
      padding-top: 0.3rem;
      max-width: 9rem;
      margin: 5px;

      border: none;
      font-family: inherit;
      font-size: inherit;
      text-align: center;

      &:focus {
        outline: none;
      }

      &.editable {
        background-color: #fff;
      }
    }

    input[type='text'] {
      color: inherit;
    }
  }
`;
