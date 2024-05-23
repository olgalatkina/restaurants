export const Tab = ({ onClick, restaurant }) => {
  return (
    <button
      onClick={() => onClick(restaurant)}
    >
      {restaurant.name}
    </button>
  )
}
