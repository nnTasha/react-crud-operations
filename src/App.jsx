import styled from 'styled-components';
import ItemsCardPanel from './components/checked-items/ItemsCardPanel';
import InputControl from './components/input-control/InputControl';

import MainPage from './pages/mainPage';
import useItems from './hooks/useItems';

const App = () => {
  const items = useItems();

  const checkedItems = items.filter(({ checked }) => checked);
  const uncheckedItems = items.filter(({ checked }) => !checked);

  return (
    <Container>
      <MainPage>
        <InputControl label="Add a Item" />
        <div className="item-panels">
          <ItemsCardPanel label="Your items list" itemsList={uncheckedItems} />
          <ItemsCardPanel label="Done" itemsList={checkedItems} />
        </div>
      </MainPage>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .item-panels {
    display: flex;
    justify-content: space-evenly;
  }
`;
