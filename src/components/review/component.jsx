export const Review = ({ user, text, rating }) => {
  return (
    <div>
      <h4>{user} <span>{rating}</span></h4>
      <p>{text}</p>
    </div>
  )
}
