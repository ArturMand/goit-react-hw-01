import PropTypes from "prop-types";
import { Avatar, Item, Online } from "./Friends.styled";
const FriendsItems = ({ avatar, isOnline, id, name }) => (
  <Item key={id}>
    <Online isOnline={isOnline}></Online>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </Item>
);

FriendsItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendsItems;
