import { FC } from "react"

interface IButtonProps {
  label: string
}

export const Button: FC<IButtonProps> = ({label}) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  )
}
