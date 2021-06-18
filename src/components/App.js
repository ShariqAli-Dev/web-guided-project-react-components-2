// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsDummyData from '../dummy-data/friends'

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [myFriends, setMyFriends] = useState(friendsDummyData)

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [friendFilter, setFriendFilter] = useState('');

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  function changeStatus(id) {
    setMyFriends(myFriends.map(friend => {
      // for each friend, if the friend has the uuid, 
      if (friend.id === id) {
        // return a copy of the friend object which has the civil status
        return {...friend, married: !friend.married}
      }
      return friend

      // otherwise, return the friend unchanged
      // return friend.id === id ? {...friend, married: !friend.married} : friend
    }))
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search friendFilter={friendFilter}/>
      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
      <FriendsList myFriends={myFriends} changeStatus={changeStatus}/>
    </div>
  )
}
