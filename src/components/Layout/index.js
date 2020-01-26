import React, { Fragment } from "react"
import NavBar from "components/NavBar"
import Container from "components/Container"
const Layout = (props) => {
  const { children } = props
  return (
    <Fragment>
      <Container contained={true}>
        <NavBar />
      </Container>

      <Container contained={true} staticStyles="mt-40">
        {children}
      </Container>
    </Fragment>
  )
}

export default Layout
