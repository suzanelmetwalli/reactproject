import logo from '../../Assets/avataaars.svg'
import Style from './Home.module.css'
let Home = ()=> {
    let x = "suaza"
    return <div className={Style.bgHome}>
    <div className="container">
        <div className="home-caption text-center text-white">
            <div className="img w-25 mx-auto">
                <img src={logo} alt="logo image" className='w-100'/>
            </div>
            <h1 className='py-2'>START FRAMEWORK</h1>
            <div className={`pb-3 ${Style.star}`}>
                <div className={`${Style.line} me-2`}></div>
                 <i className='fas fa-star'></i>
                 <div className={`${Style.line} ms-2`}></div>
            </div>
            <p className='pb-3 mb-0'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>

    </div>
}

export default Home;