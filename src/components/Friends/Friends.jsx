import PropTypes from 'prop-types';
import { Avatar, Item, List, Online } from './Friends.styled';

const Friends = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, isOnline, id, name }) => {
        return (
          <Item key={id}>
            <Online isOnline={isOnline}></Online>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </Item>
        );
      })}
    </List>
  );
};
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Friends;
