import { Profile, Statistics, FriendList, TransactionsHistory, Section } from './components/index';

import { user, data, friends, transactions } from './data/index';
import Container from './App.styled';

const App = () => (
  <Container>
    <Section title="User card">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Section>
    <Statistics title="Upload stats" stats={data} />
    <Section title="Friends list">
      <FriendList friends={friends} />
    </Section>
    <Section title="Transactions history">
      <TransactionsHistory items={transactions} />
    </Section>
  </Container>
);

export default App;
