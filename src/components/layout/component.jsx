import { Header } from '../header/component'
import { Footer } from '../footer/component'
import { ScrollProgressBar } from '../scroll-progress-bar/scroll-progress-bar'

import { useState } from 'react'
import { ThemeContext, SetterThemeContext } from '../../contexts/theme'
import { UserContext, SetterUserContext } from '../../contexts/user'

export const Layout = ({ children }) => {
  const [ theme, setTheme ] = useState('dark')
  const [ user, setUser ] = useState('')

  return (
    <ThemeContext.Provider value={theme}>
      <SetterThemeContext.Provider value={setTheme}>
        <UserContext.Provider value={user}>
          <SetterUserContext.Provider value={setUser}>
            <div>
              <div style={{
                position: 'sticky',
                top: 0,
                }}>
                <Header />
                <ScrollProgressBar />
              </div>
              {children}
              <Footer />
            </div>
          </SetterUserContext.Provider>
        </UserContext.Provider>
      </SetterThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
