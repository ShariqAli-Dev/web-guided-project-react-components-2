import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend'

export default function FriendsList(props) {
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  const { myFriends, changeStatus } = props

  return (
    <div className='list-friends container'>
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {myFriends.map(friendObject => {
        return(
          <Friend changeStatus = {changeStatus} friendObject={friendObject} key={friendObject.id}/>
        )
      })}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
    </div>
  )
}
