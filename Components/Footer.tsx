import React from 'react'
import Blankor from './Blankor'

const footerStyle:React.CSSProperties = {
  backgroundColor: "#222",
  color: "white",
}

const Footer = () => {
  return (
    <React.Fragment>
      <br/>
      <br/>
      <br/>
      <footer style={footerStyle}>
        <div>This site was made with <Blankor href="https://reactjs.org/">React</Blankor>, <Blankor href="https://www.typescriptlang.org/">TypeScript</Blankor>, <Blankor href="https://fontawesome.com/license">FontAwesome</Blankor>, and <Blankor href="https://nextjs.org/">Next.js</Blankor>.</div>
        <br/>
        <div><Blankor href="https://github.com/harryli0088/nextjs-test">GitHub Repo</Blankor></div>
      </footer>
    </React.Fragment>
  )
}

export default Footer