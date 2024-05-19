/* eslint-disable react/jsx-key */
export const Dish = ({ name, price, ingredients }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p>Ingredients:</p>
      <ul>
      {ingredients.map((ingredient) => (
        <li>
          {ingredient}
        </li>
      ))}
    </ul>
    </div>
  )
}
