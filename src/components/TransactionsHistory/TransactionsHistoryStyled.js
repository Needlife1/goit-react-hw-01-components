import styled from 'styled-components';

export const TransactionsHistoryStyled = styled('table')`
  width: 100%;
  padding: 15px;
  border-spacing: 20px;
  border-collapse: collapse;

  th {
    padding: 20px;
    background-color: greenyellow;
    color: black;
    border: 1px solid black;
  }

  td {
    border: 1px solid greenyellow;
    padding: 20px;
  }

  tr:nth-child(even) {
    background-color: black;
    color: greenyellow;
  }

  tr:nth-child(odd) {
    background-color: white;
    color: black;
  }
`;
