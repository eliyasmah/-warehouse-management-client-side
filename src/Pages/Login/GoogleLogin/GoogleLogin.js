import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import googleLogo from "../../../images/googleLogo/google.png";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  return (
    <div>
      <div className="d-flex align-items-center mt-3">
        <div
          style={{ height: "2px" }}
          className="bg-primary w-50 rounded"
        ></div>
        <div className="mx-2">or</div>
        <div
          style={{ height: "2px" }}
          className="bg-primary w-50 rounded"
        ></div>
      </div>

      <div className="mt-2">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary px-4 d-block mx-auto sm:w-100"
        >
          <img src={googleLogo} alt="" />
          <span className="mx-2"> Google Login</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
