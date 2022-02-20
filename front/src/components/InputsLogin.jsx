import { useRef, useContext, useState } from "react";
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
function InputsLogin({}) {
  const { secret, setSecret } = useContext(MainContext);
  const [error, setError] = useState(null);

  const nav = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const getParams = () => {
    const userdata = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:5000/finduser", options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setSecret(data.secret);
          nav("/mainpage");
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <div className="inputs d-flex column">
      <input type="text" ref={usernameRef} placeholder="username" />
      <input type="text" ref={passwordRef} placeholder="Password " />

      <button onClick={getParams}>Submit</button>
      <h3 className="error">{error}</h3>
    </div>
  );
}
export default InputsLogin;
