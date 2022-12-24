import { useEffect } from 'react';

import ContactDescription from './components/ContactDescription';
import ContactForm from './components/ContactForm';
import Localisation from './components/Localisation/Localisation';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className='page-contact'>
      <ContactDescription />
      <ContactForm />
      <Localisation />
    </main>
  )
}
