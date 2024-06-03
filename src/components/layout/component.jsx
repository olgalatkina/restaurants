import { Header } from '../header/component'
import { Footer } from '../footer/component'
import { ScrollProgressBar } from '../scroll-progress-bar/scroll-progress-bar'

import { useState } from 'react'
import { ThemeContext, SetterThemeContext } from '../../contexts/theme'

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={theme}>
      <SetterThemeContext.Provider value={setTheme}>
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
      </SetterThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
