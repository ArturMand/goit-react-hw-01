import Title from "components/Section/Section.styled";
import PropTypes from "prop-types";
import { ItemList, List, Percentage } from "./Statistics.styled";

const Statistics = ({ stats, title }) => (
  <section>
    {title && <Title>{title}</Title>}
    <List>
      {stats.map(({ label, id, percentage }) => (
        <ItemList key={id}>
          <span>{label}</span>
          <Percentage>{percentage}%</Percentage>
        </ItemList>
      ))}
    </List>
  </section>
);

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
