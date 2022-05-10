import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-center text-primary my-4">Please Login</h3>
      <Form onSubmit={handleRegister} className="mb-5">
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
      </Form>
    </div>
  );
};

export default Register;
