export const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <li className="item">
      {isOnline ? (
        <span className="online"></span>
      ) : (
        <span className="offline"></span>
      )}

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
