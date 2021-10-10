import "./styles.scss";
import { useState, useEffect } from "react";
import SignInComponent from "./Components/signIn";
import SignUpComponent from "./Components/signUp";
import { useAppSelector } from "../../app/hooks";
import { IProps } from "./propState";

function LoginComponent(props: IProps) {
  const [page, setPage] = useState("signIn");
  const userInfo = useAppSelector((state) => state.common.userInfo);
  useEffect(() => {
    if (userInfo.email) {
      props.history.push("home");
    }
  }, [userInfo, props.history]);

  return (
    <div className="login">
      <h2>hello {userInfo.email}</h2>
      <div
        className={`container ${page === "signIn" ? "" : "right-panel-active"}`}
      >
        <SignUpComponent />
        <SignInComponent />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={() => setPage("signIn")}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={() => setPage("signUp")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
