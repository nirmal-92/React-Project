import React from 'react'

export const Hello = ({count,handleChange}) => {
  return <button onClick={() => {
    handleChange(count+1)}}>
      Click
  </button>
}
