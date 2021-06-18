import React from 'react';
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend';

export default function FriendsList(props) {
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  // this is destructuring the props, allows us to refer to them without dot syntax
  // const {friendsData, changeStatus} = props;
  console.log(props);

  return (
    <div className='list-friends container'>
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
      {
        props.friendsData2.map(friend => {
          return <Friend key={friend.id} friend={friend} changeStatus3={props.changeStatus2} />
        })
      }
    </div>
  )
}
