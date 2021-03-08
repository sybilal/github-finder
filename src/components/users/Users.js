import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import React from 'react'
import PropTypes from 'prop-types';

const Users = ({users,loading}) => {
  if(loading){
    return <Spinner/>
  }
  return (
    <div style={userStyle}>
    {users.map((elm) => (
      <UserItem key={elm.id} user={elm} />
    ))}
  </div>
  )
}

Users.propTypes = {
  users:PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}


const userStyle = {
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap: '1rem'
}

export default Users
