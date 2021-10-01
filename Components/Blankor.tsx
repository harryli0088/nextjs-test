import React from 'react'

type Props = React.HTMLProps<HTMLAnchorElement>

//renders a blank anchor element
const Blankor = (props:Props) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

export default Blankor