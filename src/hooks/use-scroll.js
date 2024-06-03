import { useEffect, useState } from 'react'

// https://umank.hashnode.dev/create-a-progress-scroll-bar-in-react
// https://arslan-53763.medium.com/how-to-create-a-scroll-indicator-progress-bar-in-react-hooks-c38fff447329
export const useScroll = () => {
  const [barPercentWidth, setBarPercentWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.ceil((winScroll / height) * 100);

      return scrolled;
    };

    const onScroll = () => setBarPercentWidth(handleScroll());
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return barPercentWidth;
};
