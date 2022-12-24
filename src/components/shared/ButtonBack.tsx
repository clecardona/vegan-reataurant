import { BsArrowLeftCircle } from 'react-icons/bs';

export default function ButtonBack({ label }: { label: string }) {
  return (
    <>
      <BsArrowLeftCircle className='icon' />
      <h3>{label} </h3>
    </>
  )
}
