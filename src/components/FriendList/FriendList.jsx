const FriendList = friends => {
  return (
    <ul>
      <li>
        <FriendListItem friends={friends} />
        <FriendListItem friends={friends} />
        <FriendListItem friends={friends} />
        <FriendListItem friends={friends} />
        <FriendListItem friends={friends} />
      </li>
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
};

export default FriendList;
