import { useEffect } from 'react';

import menu from 'assets/menuItems.json';
import {
  NavLink,
  useParams,
} from 'react-router-dom';

import ButtonBack from '../shared/ButtonBack';
import Products from './Products';

interface IParams {
  category: string
}

export default function CategoryPage() {
  // @ts-ignore
  const { category }: IParams = useParams()
  const currentCategory = menu.find((item) => item.name === category)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className='page-category'>
      <section className='section-header'>
        <img src={currentCategory?.bgURL} alt='' className='bg' />
        <h1>{category}</h1>
      </section>
      <section className='section-description'>
        <p>{currentCategory?.description}</p>
      </section>
      <Products category={currentCategory?.name!} />

      <NavLink to={`/`} className='btn btn-main btn-300'>
        <ButtonBack label='Go back' />
      </NavLink>
    </main>
  )
}
