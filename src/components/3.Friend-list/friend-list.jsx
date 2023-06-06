import PropTypes from 'prop-types';
import styles from './friend-list.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      <span className={styles.status}>
        {isOnline ? (
          <span
            style={{
              backgroundColor: 'green',
              borderRadius: '8px',
              padding: '3px',
            }}
          >
            online
          </span>
        ) : (
          <span
            style={{
              backgroundColor: 'red',
              borderRadius: '8px',
              padding: '3px',
            }}
          >
            offline
          </span>
        )}
      </span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
