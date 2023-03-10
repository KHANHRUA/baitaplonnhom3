import styles from "./styles.module.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserSignup , UserLogin } from "../../api/user.service";

function Log() {
  const [state, setState] = useState(true);
  const [buttonstate, setButtonState] = useState("Sign Up");
  const [sign, setSign] = useState("");
  const [pass, setPass] = useState("");
  const [signup, setSignUp] = useState("");
  const [passup, setPassUp] = useState("");
  const [content, setContent] = useState(
    "if you haven't have account please Sign Up"
  );
  const handleClick = () => {
    setState(!state);
    if (state === false) {
      setButtonState("Sign Up");
      setContent("if you haven't have account please Sign Up");
    } else {
      setButtonState("Sign In");
      setContent("if you had an account please Sign In");
    }
  };
  const register = async () => {
    let response = await UserSignup.signupuser({
      username: signup,
      password: passup,
    });
    if (response.status === 201) {
      alert("register successful!");
    }
    if (response.data === 1) {
      alert("error");
    }
  };

  const login = async () => {
    let response = await UserLogin.loginuser({
      username: sign,
      password: pass,
    });
    if (response.status === 200) {
      alert("enjoy");
      window.location.replace("/home");
    }
    if (response.data === 1) {
      alert("error");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <span>
          <div
            className={state === false ? styles.hiddenleft : styles.hiddenright}
          >
            <div className={styles.appname}>ISSAC</div>
            <div className={styles.content}>{content}</div>
            <button className={styles.changebutton} onClick={handleClick}>
              {buttonstate}
            </button>
          </div>
          <div className={styles.container}>
            <div>
              <div className={styles.logo}></div>
              <div className={styles.label}>
                <div>
                  <label for="name">Username:</label>
                  <br />
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    value={signup}
                    onChange={(e) => setSignUp(e.target.value)}
                  />
                  <br />
                  <label for="pass">Password:</label>
                  <br />
                  <input
                    className={styles.input}
                    name="pass"
                    type="password"
                    value={passup}
                    onChange={(e) => setPassUp(e.target.value)}
                  />
                  <br />
                  <button
                    className={styles.input}
                    name="submitup"
                    value="Sign Up"
                    onClick={register}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.container}>
            <div>
              <div className={styles.logo}></div>
              <div className={styles.label}>
                <div>
                  <label for="name">Username:</label>
                  <br />
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    value={sign}
                    onChange={(e) => setSign(e.target.value)}
                  />
                  <br />
                  <label for="pass">Password:</label>
                  <br />
                  <input
                    className={styles.input}
                    name="pass"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <br />
                  {/* <Link to="/home"> */}
                    <button
                      className={styles.input}
                      name="submitup"
                      type="submit"
                      value="Sign in"
                      onClick={login}
                    >
                      Sign In
                    </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Log;
