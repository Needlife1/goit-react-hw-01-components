import { Profile } from './Profile/Profile';
import user from '../Data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../Data/data.json';
import { FriendList } from './FriendList/FriendList';
import dataFriend from '../Data/friends.json';
import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory';
import dataTransactions from '../Data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={dataFriend} />

      <TransactionsHistory transactions={dataTransactions} />
    </>
  );
};
