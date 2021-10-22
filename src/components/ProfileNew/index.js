import React from "react"
import styled, { css } from 'styled-components'

import twIcon from '@images/social/twitter-white.png'
import liIcon from '@images/social/linkedin-white.png'

const Container = styled.div`
  
`

const ProfileNew = ({ data }) => {
  return (
    <Container className='profile-container'>
      <img src={data.avatar} className='img-avatar' width='172' />
      <div className='caption-container'>
        <h5>{data.name}</h5>
        <h4>{data.role}</h4>
        <div>
          <a href={data.twitter} target="_blank"><img src={twIcon} /></a>
          <a href={data.linkedin} target="_blank"><img src={liIcon} /></a>
        </div>
      </div>
    </Container>
  )
}

export default ProfileNew
