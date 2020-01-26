import React from "react"

const customTheme = {
  default: {
    border: "blue-200",
    background: "white-000",
    text: "blue-100",
  },
  checked: {
    border: "blue-300",
    background: "blue-300",
    text: "white-000",
  },
}
const RadioAreaFilter = (props) => {
  const { children, checked, additionalStyles } = props
  const inputProps = []
  Object.keys(props)
    .filter((prop) => ["children", "additionalStyles"].includes(prop) === false)
    .map((p) => (inputProps[p] = props[p]))
  const currentTheme = checked === true ? "checked" : "default"
  return (
    <label
      className={`${checked && "font-bold"} flex rounded-full relative border-solid border-1 border-${
        customTheme[currentTheme].border
      } text-${customTheme[currentTheme].text} bg-${customTheme[currentTheme].background} ${additionalStyles &&
        additionalStyles}`}
      htmlFor={props.id}
    >
      <input className="cursor-pointer absolute opacity-0 block h-full w-full" type="radio" {...inputProps} />
      <div className="py-10 px-30">{children}</div>
    </label>
  )
}

export default RadioAreaFilter
