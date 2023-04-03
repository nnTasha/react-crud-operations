import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from '../ui/button/Button';
import Input from '../ui/input-field/Input';
import useItemsManagement from '../../hooks/useItemsManagement';

const InputControl = ({ label, placeholder }) => {
  const { addItem } = useItemsManagement();

  const itemInputRef = useRef();

  const addItemHandler = (e) => {
    const newInput = itemInputRef.current.value;

    if (!newInput) return;

    addItem(newInput);
    itemInputRef.current.value = '';
  };

  return (
    <Container>
      <Input label={label} placeholder={placeholder} inputRef={itemInputRef} />
      <Button title="Add item" onClick={addItemHandler} width='6rem'></Button>
    </Container>
  );
};
export default InputControl;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  padding: 1.5rem 0;

  button {
    position: relative;
    margin-left: 1.5rem;
    top: 0.6rem;
  }
`;
