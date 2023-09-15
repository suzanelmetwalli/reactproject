import Style from "./About.module.css";

export default function About() {
  return (
    <div className={Style.bgAbout}>
      <div className="container w-75 mx-auto text-white py-5">
        <h1 className="py-3 text-center">ABOUT COMPONENT</h1>
        <div className={`pb-3 ${Style.star}`}>
          <div className={`${Style.line} me-2`}></div>
          <i className="fas fa-star"></i>
          <div className={`${Style.line} ms-2`}></div>
        </div>
        <div className="row g-4 py-4">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
          <p>
            Freelancer is a free bootstrap theme created by Route. The
            download includes the complete source files including HTML, CSS,
            and JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
