import PropTypes from "prop-types";
import {
  TableTransactions,
  TdBody,
  ThHead,
  ThHeadTransactions,
  TrBody,
} from "./Transactions.styled";

const TransactionsHistory = ({ items }) => (
  <TableTransactions>
    <ThHead>
      <tr>
        <ThHeadTransactions>Type</ThHeadTransactions>
        <ThHeadTransactions>Amount</ThHeadTransactions>
        <ThHeadTransactions>Currency</ThHeadTransactions>
      </tr>
    </ThHead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <TrBody key={id} lenght={items}>
            <TdBody type={type}>{type}</TdBody>
            <TdBody>{amount}</TdBody>
            <TdBody>{currency}</TdBody>
          </TrBody>
        );
      })}
    </tbody>
  </TableTransactions>
);
TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TransactionsHistory;
