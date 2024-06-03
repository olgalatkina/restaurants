import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import styles from './styles.module.css'
const Star = ({ value, onClick, active, children }) => {
  const theme = useContext(ThemeContext)
  const classNames = `${theme === 'light' ? styles.light : styles.dark} ${active ? styles.active : ''}`

  return (
    <button
      type='button'
      value={value}
      onClick={() => onClick(value)}
      className={classNames}
      aria-label={`rating ${value}`}
    >
      {children || value}
    </button>)
}

export const Rating = ({ maxValue = 5, onChange, rating }) => {
  return (
    <div>
      <div>Rating: </div>
      <div>
        {Array.from({ length: maxValue }).map((_, index) => {
          const value = index + 1;

          return (
            <Star
              key={index}
              value={value}
              onClick={onChange}
              active={rating === value}
            />
          )
        })}
      </div>
    </div>
  )
}
