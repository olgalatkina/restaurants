import { Button } from '../button/component'

export const Tab = ({ onClick, title, isActive }) => {
  return (
    <Button
      onClick={onClick}
      disabled={isActive}
    >
      {title}
    </Button>
  )
}
