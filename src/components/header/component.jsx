import { useContext } from 'react'
import { SetterThemeContext } from '../../contexts/theme'
import { UserContext, SetterUserContext } from '../../contexts/user'
import { Button } from '../button/component'
import styles from './styles.module.css'

export const Header = () => {
  const setTheme = useContext(SetterThemeContext)
  const user = useContext(UserContext)
  const setUser = useContext(SetterUserContext)

  const handleThemeChange = () => {
    setTheme((prevState) => (prevState === 'dark') ? 'light' : 'dark')
  }

  const handleUserSignIn = () => {
    setUser((prevState) => prevState ? '' : 'trolya')
  }

  return (
    <header className={styles.header}>
      <Button onClick={handleThemeChange}>change theme</Button>
      HEADER
      <div>
        <span>{user}</span>
        <Button onClick={handleUserSignIn}>{user ? 'SignOut' : 'SignIn'}</Button>
      </div>
    </header>
  )
}
