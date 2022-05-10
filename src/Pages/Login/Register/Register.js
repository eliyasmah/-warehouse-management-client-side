import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };

  const navigateLogin = (event) => {
    navigate("/login");
  };

  if (user) {
    navigate("/");
  }
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
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
      </Form>
    </div>
  );
};

export default Register;
