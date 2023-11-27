import { Transaction } from './Transaction';
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
        {transactions.map((el, i) => {
          return (
            <Transaction
              key={el.id}
              id={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </TransactionsHistoryStyled>
  );
};
