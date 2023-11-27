import { FriendListItem } from './FriendListItem';
import { FriendListStyled } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            key={friend.id}
            isOnline={friend.isOnline}
          />
        );
      })}
    </FriendListStyled>
  );
};
