import PropTypes from "prop-types";
import { List } from "./Friends.styled";
import FriendsItems from "./FriendsItem";

const FriendsList = ({ friends }) => <List>{friends.map(FriendsItems)}</List>;
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FriendsList;
