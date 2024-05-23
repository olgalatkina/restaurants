/* eslint-disable react/jsx-key */
import { Review } from '../review/component'
export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li>
            <Review {...review} />
          </li>
        ))}
      </ul>
    </div>
  )
}
