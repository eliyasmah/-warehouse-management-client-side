import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateAccount = (event) => {
    navigate("/account");
  };
  if (user) {
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
  };
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-center text-primary my-4">Please Login</h3>
      <Form onSubmit={handleSubmit} className="mb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link
          to="/account"
          className="m-2 text-danger text-decoration-none"
          onClick={navigateAccount}
        >
          Create Account
        </Link>
        <p>
          <button
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Forget Password?{" "}
          </button>{" "}
        </p>
        <GoogleLogin></GoogleLogin>
      </Form>
    </div>
  );
};

export default Login;
