import styled from 'styled-components';

const Input = ({ label, placeholder, inputRef, onChange }) => {
  return (
    <Container>
      <label htmlFor="input">{label}</label>
      <input
        className="input"
        id="input"
        placeholder={placeholder}
        ref={inputRef}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // TODO: make as a dynamic property

  label {
    margin: 0.3rem 0;
    /* position: relative; */
    // TODO: make as a dynamic property
    right: 5.5rem;
  }

  .input {
    width: 20rem;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #fff;
    padding: 0.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:focus {
      outline: none;
    }
  }
`;
