import styled from 'styled-components';

export const FriendListStyled = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;

  li {
    display: flex;
    gap: 15px;
    border: 1px solid greenyellow;
    width: 250px;
    padding: 5px 5px 5px 20px;
    color: greenyellow;
    background-color: black;
    align-items: center;
    border: 2px solid greenyellow;
  }

  span {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }

  .online {
    background-color: greenyellow;
  }

  .offline {
    background-color: red;
  }

  p {
    font-size: 30px;
  }
`;
