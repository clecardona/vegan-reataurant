import { useEffect } from 'react';

import foodData from 'assets/foodItems.json';
import ButtonBack from 'components/shared/ButtonBack';
import {
  NavLink,
  useParams,
} from 'react-router-dom';

import Description from './components/Description';
import Ingredients from './components/Ingredients';
import NutritionFacts from './components/NutritionFacts';

interface IParams {
  category: string
  productID: string
}

export interface IProduct {
  id: any
  category: string
  title: string
  description: string
  ingredients: any
  nutrition_facts: INutritionFact[]
  imageURL: string
}

interface INutritionFact {
  id: any
  label: string
  value: number
}

export default function ProductPage() {
  //@ts-ignore
  const { category, productID }: IParams = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const product = foodData.find(
    (item) => item.id === Number.parseInt(productID)
  )
  if (!product) return <></>
  return (
    <main className='page-product'>
      <Description product={product} />
      <Ingredients product={product} />
      <NutritionFacts product={product} />
      <NavLink to={`/menu/${category}`} className='btn btn-main btn-300'>
        <ButtonBack label='Go back' />
      </NavLink>
    </main>
  )
}
