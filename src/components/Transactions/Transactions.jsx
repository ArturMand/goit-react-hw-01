import PropTypes from 'prop-types';
import {
  TableTransactions,
  TdBody,
  ThHead,
  ThHeadTransactions,
  TrBody,
} from './Transactions.styled';

const Transactions = ({ transactions }) => {
  return (
    <TableTransactions>
      <ThHead>
        <tr>
          <ThHeadTransactions>Type</ThHeadTransactions>
          <ThHeadTransactions>Amount</ThHeadTransactions>
          <ThHeadTransactions>Currency</ThHeadTransactions>
        </tr>
      </ThHead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TrBody key={id} lenght={transactions}>
              <TdBody type={type}>{type}</TdBody>
              <TdBody>{amount}</TdBody>
              <TdBody>{currency}</TdBody>
            </TrBody>
          );
        })}
      </tbody>
    </TableTransactions>
  );
};
Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Transactions;
