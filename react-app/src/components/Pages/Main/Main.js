import React from 'react'
import Quote from '../../Atoms/Quote/Quote'
import LeaderBoard from '../../Molecules/LeaderBoard/LeaderBoard'
import UserDataBlock from '../../Organisms/UserDataBlock/UserDataBlock'

function Main() {
  return (
    <div>
      <Quote/>
      <UserDataBlock/>
      <LeaderBoard/>
    </div>
  )
}

export default Main
