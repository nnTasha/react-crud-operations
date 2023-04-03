import styled from 'styled-components';

const Button = ({ onClick = () => {}, title = 'Click Me' }, width) => {
  return (
    <Container onClick={onClick} width={width}>
      {title}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  width: ${(props) => props.width};
  border: none;
  background-color: #ac9d85;
  margin: 10px;
  padding: 0.4rem;
  border-radius: 0.5rem;
  cursor: pointer;

  font-family: 'Shantell Sans';
`;
