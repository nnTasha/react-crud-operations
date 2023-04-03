import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import Input from '../ui/input-field/Input';
import ItemList from '../ui/item-list/ItemList';

const ItemsCardPanel = ({ label, itemsList = [] }) => {
  const [query, setQuery] = useState('');

  const filteredList = itemsList.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  const onChangeHandler = (e) => setQuery(e.target.value);

  return (
    <Container>
      <Input
        placeholder="Search ..."
        label={label}
        onChange={onChangeHandler}
      />
      <ItemList items={filteredList} />
    </Container>
  );
};

export default ItemsCardPanel;

const Container = styled.div`
  width: 40%;
  height: 30rem;
  border: 1px solid #fff;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  label {
    margin: 0.3rem 0;
    right: 5.5rem;
  }
`;
