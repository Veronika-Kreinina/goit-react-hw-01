import s from '../FriendList/FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.container}>
      <img src={avatar} alt="Avatar" width="48" className={s.img} />
      <p>{name}</p>
      <p className={`${s.status} ${isOnline ? s.online : s.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
