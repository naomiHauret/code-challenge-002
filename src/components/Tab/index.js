import React from "react"

const Tab = (props) => {
  const { title, active, children } = props
  return (
    <details open={active}>
      <summary>{title}</summary>
      {children}
    </details>
  )
}

export default Tab
