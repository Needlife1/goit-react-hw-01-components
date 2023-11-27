import styled from 'styled-components';

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const StatisticsSection = styled.section`
  background-color: black;
  max-width: 500px;
  margin: 0 auto 25px;

  h2 {
    text-align: center;
    padding: 25px;
    color: greenyellow;
    margin: 0;
  }

  ul {
    display: flex;

    justify-content: center;
  }

  li {
    border: 1px solid greenyellow;
    padding: 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }

  .percentage {
    font-weight: 600;
    font-size: 25px;
  }
`;
