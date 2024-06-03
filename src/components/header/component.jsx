import { useContext } from 'react'
import { SetterThemeContext } from '../../contexts/theme'
import styles from './styles.module.css'

export const Header = () => {
  const setTheme = useContext(SetterThemeContext)

  const handleThemeChange = () => {
    setTheme((prevState) => (prevState === 'dark') ? 'light' : 'dark')
  }

  return (
    <header className={styles.header}>
      <button onClick={handleThemeChange}>change theme</button>
      HEADER
      <div>
        <span>name</span>
        <button onClick={() => console.log('click')}>SignIn</button>
      </div>
    </header>
  )
}
