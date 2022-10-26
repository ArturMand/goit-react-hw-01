import PropTypes from 'prop-types';
import {
  Container,
  WrapperCard,
  UserName,
  UserTag,
  UserLocation,
  DataList,
  DataItem,
  Stats,
  StatsText,
  UserPhoto,
} from './CardUser.styled';
const CardUser = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;
  return (
    <Container>
      <WrapperCard>
        <UserPhoto src={avatar} alt="User avatar" width="50" height="50" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </WrapperCard>
      <DataList>
        <DataItem>
          <StatsText>Followers</StatsText>
          <Stats>{followers}</Stats>
        </DataItem>
        <DataItem>
          <StatsText>Views</StatsText>
          <Stats>{views}</Stats>
        </DataItem>
        <DataItem>
          <StatsText>Likes</StatsText>
          <Stats>{likes}</Stats>
        </DataItem>
      </DataList>
    </Container>
  );
};
CardUser.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default CardUser;
