import { BsArrowRightCircle } from 'react-icons/bs';

export default function ButtonForward({ label }: { label: string }) {
  return (
    <>
      <h3>{label} </h3>
      <BsArrowRightCircle className='icon' />
    </>
  )
}
