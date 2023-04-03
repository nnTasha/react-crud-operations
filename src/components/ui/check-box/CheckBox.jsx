import styled from 'styled-components';

const CheckBox = ({ isChecked, selectItemHandler }) => {
  return (
    <Container
      className="box-input"
      onChange={selectItemHandler}
      checked={isChecked}
    />
  );
};

export default CheckBox;

const Container = styled.input.attrs({
  type: 'checkbox',
})`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  appearance: none;
  margin: 0;

  background-color: #fff;
  border: 1px solid #cacece;
  border-radius: 5px;

  &:checked::before {
    content: '\u2714';
    display: block;
    position: relative;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    line-height: 1;
  }
`;
