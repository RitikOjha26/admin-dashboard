import React from "react"
import { type LucideIcon } from "lucide-react"

type DefaultButtonProps = {
  heading: string
  icon?: LucideIcon
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ heading, icon: Icon }) => {
  return (
    <>
      {heading}
      {Icon && <Icon />}
    </>
  )
}

export default DefaultButton
