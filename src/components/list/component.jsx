/* eslint-disable react/jsx-key */
export const List = ({ items, ItemComponent }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <ItemComponent {...item} />
        </li>
      ))}
    </ul>
  )
}
