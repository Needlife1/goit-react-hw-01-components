import { TransactionsHistoryStyled } from './TransactionsHistoryStyled';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <TransactionsHistoryStyled>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(el => {
          return (
            <tr key={el.id} id={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </TransactionsHistoryStyled>
  );
};
