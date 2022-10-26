import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionsHistory from "../TransactionsHistory/TransactionsHistory";
import Section from "../Section/Section";
import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";
import Container from "./App.styled";

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
