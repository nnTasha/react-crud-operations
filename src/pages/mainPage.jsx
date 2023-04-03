import styled from "styled-components";

const MainPage = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainPage;

const Container = styled.section`
  margin: 50px auto;
  height: 700px;
  width: 1000px;
  text-align: center;

  background-color: #f1e8d3;
`;
