import { useRef, useState } from "react";
import Style from "./Contact.module.css";

export default function Contact() {
  const inputRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  let [input, setInput] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  function styling(event, ref) {
    if (event.target.value !== "") {
      ref.current.style.marginBottom = "15px";
      ref.current.classList.remove("opacity-0");
    } else {
      ref.current.classList.add("opacity-0");
      ref.current.style.marginBottom = "0px";
    }
  }

  return (
    <>
      <h1 className="py-3 text-center">CONATCT SECTION</h1>
      <div className={`pb-3 ${Style.star}`}>
        <div className={`${Style.line} me-2`}></div>
        <i className="fas fa-star"></i>
        <div className={`${Style.line} ms-2`}></div>
      </div>
      <div className="container w-50 mx-auto">
        <label
          htmlFor="name"
          className={`opacity-0 ${Style.test}`}
          ref={inputRef}
        >
          UserName
        </label>
        <input
          type="text"
          id="name"
          placeholder="UserName"
          className={`form-control mb-4 ${Style.customForm}`}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            styling(e, inputRef);
          }}
        />
        <label htmlFor="age" className={`opacity-0 ${Style.test}`} ref={ageRef}>
          UserAge
        </label>
        <input
          type="text"
          id="age"
          placeholder="UserAge"
          className={`form-control mb-4 ${Style.customForm}`}
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            styling(e, ageRef);
          }}
        />
        <label
          htmlFor="email"
          className={`opacity-0 ${Style.test}`}
          ref={emailRef}
        >
          UserEmail
        </label>
        <input
          type="email"
          id="email"
          placeholder="UserEmail"
          className={`form-control mb-4 ${Style.customForm}`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            styling(e, emailRef);
          }}
        />
        <label
          htmlFor="password"
          className={`opacity-0 ${Style.test}`}
          ref={passRef}
        >
          UserPassword
        </label>
        <input
          type="password"
          id="password"
          placeholder="UserPassword"
          className={`form-control mb-4 ${Style.customForm}`}
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
            styling(e, passRef);
          }}
        />
      </div>
    </>
  );
}
