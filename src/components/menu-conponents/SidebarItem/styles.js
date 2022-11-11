import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0px 24px 20px;
  font-family: 'Roboto';

  > svg {
    margin: 0px 20px;
  }

  &:hover {
    background-color: black;
  }
`;