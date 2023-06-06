import user from './1.social-media-profile/user.json';
import { Profile } from './1.social-media-profile/social-media-profile.jsx';

import data from './2.statistics/data.json';
import { StatisticList } from './2.statistics/statistics.jsx';

import friends from './3.Friend-list/friends.json';
import { FriendList } from './3.Friend-list/friend-list';

import transactions from './4.Transaction-history/transactions.json';
import { TransactionHistory } from './4.Transaction-history/transaction-history';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
