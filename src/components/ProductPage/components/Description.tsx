import { IProduct } from '../ProductPage';

export default function Description({ product }: { product: IProduct }) {
  return (
    <section className='section-product_description'>
      <img alt='img' src={product.imageURL} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </section>
  )
}
