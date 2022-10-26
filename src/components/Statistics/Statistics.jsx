import PropTypes from 'prop-types';
import { ItemList, List, Percentage } from './Statistics.styled';

const Statistics = ({ stats }) => {
  return (
    <List>
      {stats.map(({ label, id, percentage }) => {
        return (
          <ItemList key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </ItemList>
        );
      })}
    </List>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
