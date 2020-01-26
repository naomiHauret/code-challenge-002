import React, { memo } from "react"
const customTheme = {
  success: {
    text: "green-300",
    border: "green-300",
  },
  danger: {
    text: "red-300",
    border: "red-300",
  },
}
const Button = memo((props) => {
  const { children, additionalStyles, tagType, theme } = props
  const ButtonTag = tagType
  const buttonProps = {}
  Object.keys(props)
    .filter((prop) => ["additionalStyles", "tagType", "theme"].includes(prop) === false)
    .map((p) => (buttonProps[p] = props[p]))

  return (
    <ButtonTag
      className={`text-${customTheme[theme].text} border-${customTheme[theme].border} ${
        props.disabled ? "opacity-25 cursor-not-allowed" : "cursor-pointer"
      } border-solid font-bold bg-white-000 rounded-full py-10 px-40 flex items-center justify-center ${additionalStyles}
            ${tagType === "a" ? `no-underline ${styles.buttonLink}` : ""}
        `}
      {...buttonProps}
    >
      {children}
    </ButtonTag>
  )
})

Button.defaultProps = {
  tagType: "button",
}

export default Button
