import { NavLink } from 'react-router-dom';

import foodData from '../../assets/foodItems.json';
import ButtonForward from '../shared/ButtonForward';

export default function Products({ category }: { category: string }) {
  const listOfProducts = foodData.filter((item) => item.category === category)

  const ProductsItems = listOfProducts.map((item) => {
    return (
      <article key={item.id}>
        <img src={item.imageURL} alt='img' />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <NavLink to={`./${item.category}/${item.id}`} className='btn btn-card'>
          <ButtonForward label='View Product' />
        </NavLink>
      </article>
    )
  })

  return <section className='section-products '>{ProductsItems}</section>
}
