export const Tab = ({ onClick, title, isActive }) => {
  return (
    <button
      onClick={onClick}
      disabled={isActive}
    >
      {title}
    </button>
  )
}
