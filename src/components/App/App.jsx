import CardUser from '../CardUser/CardUser';
import Statistics from '../Statistics/Statistics';
import Friends from '../Friends/Friends';
import Transactions from '../Transactions/Transactions';
import Section from '../global/Section';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Container from './App.styled';

const App = () => {
  return (
    <Container>
      <Section title="User card">
        <CardUser user={user} />
      </Section>
      <Section title="Upload stats">
        <Statistics stats={data} />
      </Section>
      <Section title="Friends">
        <Friends friends={friends} />
      </Section>
      <Section title="Transactions">
        <Transactions transactions={transactions} />
      </Section>
    </Container>
  );
};
export default App;
