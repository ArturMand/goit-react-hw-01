import PropTypes from "prop-types";
import { List, Item } from "./FriendList.styled";
import FriendListItems from "./FriendListItem";

const FriendsList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, isOnline, id, name }) => {
      return (
        <Item key={id}>
          <FriendListItems isOnline={isOnline} avatar={avatar} name={name} />
        </Item>
      );
    })}
  </List>
);
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
