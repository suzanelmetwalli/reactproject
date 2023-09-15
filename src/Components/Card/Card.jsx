
import Style from "./Card.module.css";
export default function Card(props) {

  return (
    <>
    <div className="col-md-4" >
    <div className={`card rounded overflow-hidden position-relative`}>
      <img src={props.img} alt="image one" />
      <div className={Style.layout}>
        <i className="text-white fa-solid fa-plus fa-6x"></i>
      </div>
    </div>
    </div>
    </>
   
  );
}
