import React from 'react'

type Props = {
  children: React.ReactNode
}

const Header = (props: Props) => {
  return (
    <header style={{backgroundColor: "#000", lineHeight: "1.5em"}}>{props.children}</header>
  )
}

export default Header