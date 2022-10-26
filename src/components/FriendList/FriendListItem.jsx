// import PropTypes from "prop-types";
import { Avatar, Online } from "./FriendList.styled";
const FriendListItems = ({ avatar, isOnline, name }) => (
  <>
    <Online isOnline={isOnline}></Online>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </>
);

export default FriendListItems;
