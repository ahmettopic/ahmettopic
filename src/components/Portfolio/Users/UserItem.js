import React from 'react';

const UserItem = () => {
  const { login, avatar_url, html_url } = this.state;
  return (
    <div>
      <img src={avatar_url} alt="avatar_url" style={{ width: '80px' }} />
      <h3>{login}</h3>
      <a href={html_url}>More</a>
    </div>
  );
};

export default UserItem;
