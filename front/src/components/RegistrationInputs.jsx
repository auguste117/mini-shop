import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function RegistrationInputs() {
  const [error, setError] = useState(null);
  const nav = useNavigate();
  const usernameRef = useRef();
  const passwordOneRef = useRef();
  const passwordTwoRef = useRef();
  const getParams = () => {
    const user = {
      username: usernameRef.current.value,
      passwordOne: passwordOneRef.current.value,
      passwordTwo: passwordTwoRef.current.value,
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch("http://localhost:5000/createuser", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          nav("/login");
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <div className="d-flex column inputs">
      <input type="text" ref={usernameRef} placeholder="username" />
      <input type="text" ref={passwordOneRef} placeholder="Password one" />
      <input type="text" ref={passwordTwoRef} placeholder="Password two" />

      <button onClick={getParams}>Submit</button>
      <h3 className="error">{error}</h3>
    </div>
  );
}
export default RegistrationInputs;
