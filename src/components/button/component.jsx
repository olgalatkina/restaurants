import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import styles from './styles.module.css'

export const Button = ({ onClick, children, ...rest }) => {
  const theme = useContext(ThemeContext)
  const classNames = `${theme === 'light' ? styles.light : styles.dark}`

  return (
    <button
      className={classNames}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
