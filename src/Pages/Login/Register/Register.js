import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Loading from "./../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Updated profile");
    navigate("/");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }
  const navigateLogin = (event) => {
    navigate("/login");
  };

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-center text-primary my-4">Please Create Account</h3>
      <Form onSubmit={handleRegister} className="mb-5">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control ref={nameRef} type="text" placeholder="Name" required />
        </Form.Group>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link
          to="/login"
          className="m-2 text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Please login
        </Link>
        <GoogleLogin></GoogleLogin>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Register;
