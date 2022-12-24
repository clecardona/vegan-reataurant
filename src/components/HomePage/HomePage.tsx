import { useEffect } from 'react';

import Hero from './components/Hero';
import Menu from './components/Menu';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <Menu />
    </main>
  )
}
