import { useContext } from 'react'
import { SetterThemeContext } from '../../contexts/theme'
import { Button } from '../button/component'
import styles from './styles.module.css'

export const Header = () => {
  const setTheme = useContext(SetterThemeContext)

  const handleThemeChange = () => {
    setTheme((prevState) => (prevState === 'dark') ? 'light' : 'dark')
  }

  return (
    <header className={styles.header}>
      <Button onClick={handleThemeChange}>change theme</Button>
      HEADER
      <div>
        <span>name</span>
        <Button onClick={() => console.log('click')}>SignIn</Button>
      </div>
    </header>
  )
}
