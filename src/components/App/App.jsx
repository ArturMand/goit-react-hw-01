import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendsList from "../Friends/FriendsList";
import TransactionsHistory from "../Transactions/TransactionsHistory";
import Section from "../Section/Section";
import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";
import Container from "./App.styled";

const App = () => {
  return (
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
        <FriendsList friends={friends} />
      </Section>
      <Section title="Transactions history">
        <TransactionsHistory items={transactions} />
      </Section>
    </Container>
  );
};
export default App;
