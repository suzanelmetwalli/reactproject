import img from '../Assets/notfound.jpg'

export default function Notfound() {
  return (
    <div className='text-center py-5 w-25 mx-auto'>
      <img src={img} alt="notfound" className='w-100'/>
    </div>
  )
}
