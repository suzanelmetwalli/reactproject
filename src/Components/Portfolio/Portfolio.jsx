import Style from './Portfolio.module.css'
import Card from '../Card/Card'
import img1 from "../../Assets/poert1.png";
import img2 from "../../Assets/port2.png"
import img3 from "../../Assets/port3.png"

export default function Portfolio() {
  return (
    <>
   <div className='py-3'>
   <h1 className='py-2 text-center'>PORTFOLIO COMPONENT</h1>
   <div className={`pb-3 ${Style.star}`}>
       <div className={`${Style.line} me-2`}></div>
        <i className='fas fa-star'></i>
        <div className={`${Style.line} ms-2`}></div>
   </div>
   </div>
   <div className="container py-4">
    <div className="row gy-4">
        <Card img= {img1}/>
        <Card img= {img2}/>
        <Card img= {img3}/>
        <Card img= {img1}/>
        <Card img= {img2}/>
        <Card img= {img3}/>
    </div>
   </div>
    </>
  )
}
