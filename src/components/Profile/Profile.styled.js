import styled from 'styled-components';

export const ProfileStyled = styled.div`
  background-color: black;
  width: 250px;
  border: 2px solid greenyellow;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: greenyellow;
  margin-bottom: 25px;

  .description {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  ul {
    display: flex;
    width: 100%;
  }

  li {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1px solid greenyellow;
    flex: 1;
  }

  .quantity {
    font-size: 25px;
  }
`;
