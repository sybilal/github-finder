import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
  const githubContext = useContext(GithubContext);
  const {users,loading} = githubContext;
  
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map((elm) => (
        <UserItem key={elm.id} user={elm} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
