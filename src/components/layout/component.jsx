import { Header } from '../header/component'
import { Footer } from '../footer/component'
import { ProgressBar } from '../scroll-progress-bar/component'

import { useRef } from 'react'
import { ScrollProgressBar } from '../scroll-progress-bar/scroll-progress-bar'
import { useScrollProgress } from '../../hooks/use-scroll-progress-bar'

export const Layout = ({ children }) => {
  const ref = useRef(null)
  const scrollProgress = useScrollProgress(ref);
  console.log(scrollProgress)

  return (
    <div ref={ref}>
      <ProgressBar />
      <div style={{
        position: 'sticky',
        top: 0,
        }}>
        <Header  />
        <ScrollProgressBar />
      </div>
      {children}
      <Footer />
    </div>
  )
}
