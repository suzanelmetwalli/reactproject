import Style from "./Details.module.css";
export default function Details() {
  return (
    <div className={Style.bgAbout}>
      <div className="container py-5">
        <div className="row gy-5 text-center text-white">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p className="mb-0">Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <ul className="list-unstyled d-flex justify-content-center align-items-center">
                <li> <i className="fas fa-brands fa-facebook mx-1  border rounded-circle p-2 "></i></li>
                <li> <i className="fas fa-brands fa-twitter mx-1 border rounded-circle p-2"></i></li>
                <li> <i className="fas fa-brands fa-linkedin-in mx-1  border rounded-circle p-2"></i></li>
                <li> <i className="fas fa-globe mx-1  border rounded-circle p-2"></i></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
  );
}
