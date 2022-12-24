import { IProduct } from '../ProductPage';

export default function Ingredients({ product }: { product: IProduct }) {
  console.log("product", product)
  const ItemIngredients = product.ingredients.map((ingredient: any) => {
    return (
      <li key={ingredient}>
        <div className='pill'>
          <img
            className='food-icon'
            src={`https://clecardona.com/npa/icns/food/${ingredient[1]}.svg`}
            alt={ingredient[1]}
          />
          <h3>{ingredient[0]}</h3>
        </div>
      </li>
    )
  })

  return (
    <section className='section-ingredients'>
      <ul>{ItemIngredients}</ul>
    </section>
  )
}
