import React from 'react'

function LinkProfile(props:any) {
  return (
    <a href={`https://twitter.com/${props.handle}`}>Go to Account</a>
  )
}

export default LinkProfile