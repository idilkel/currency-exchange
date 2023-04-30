import { useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "./FormContainer";

const Contact = () => {
  // const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    message: "",
    subject: "",
  });
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const validateForm = () => {
    const { email, fullName, message, subject } = form;
    const newErrors = {};

    if (!email || email === "" || !email.match(/@/) || !email.match(/\./)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!fullName || fullName === "" || fullName.length < 3) {
      newErrors.fullName = "Please enter a full name";
    }

    if (!message || message === "" || message.length < 10) {
      newErrors.message =
        "Please enter a message with minimum of 10 characters";
    }

    if (!subject || subject === "") {
      newErrors.subject = "Please enter a subject";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("form submitted");
      console.log(form);

      setSubmitted(true);
    }
  };

  const handleBackToForm = (e) => {
    e.preventDefault();
    setForm({ email: "", fullName: "", message: "", subject: "" });
    setSubmitted(false);
  };

  const formSubmitted = (
    <div>
      <h4>Form was submitted</h4>
      <div className="contact-message">
        {" "}
        <p>Full name: {form.fullName}</p>
        <p>Email: {form.email}</p>
        <p>Subject: {form.subject}</p>
        <p>Message: {form.message}</p>
      </div>

      <p>Thank you for your message!</p>
      <Button
        onClick={handleBackToForm}
        variant="primary"
        type="submit"
        className="my-2"
      >
        Back To Form
      </Button>
    </div>
  );

  const theForm = (
    <Form>
      <Form.Group className="mb-3" controlId="formFullName" id="fullName">
        <Form.Label className="mb-0">Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          value={form.fullName}
          onChange={(e) => setField("fullName", e.target.value)}
          isInvalid={!!errors.fullName}
          required
        />
        <Form.Control.Feedback type="invalid">
          {/*Please enter full name.*/}
          {errors.fullName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSubject" id="subject">
        <Form.Label className="mb-0">Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject"
          value={form.subject}
          onChange={(e) => setField("subject", e.target.value)}
          isInvalid={!!errors.subject}
          required
        />
        <Form.Control.Feedback type="invalid">
          {/*Please enter a subject.*/}
          {errors.subject}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail" id="email">
        <Form.Label className="mb-0">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          isInvalid={!!errors.email}
          required
        />
        <Form.Control.Feedback type="invalid">
          {/* Please enter valid email.*/}
          {errors.email}
        </Form.Control.Feedback>
        {/*<Form.Text className="text-muted">
          We'll never share your email with anyone else.
  </Form.Text>*/}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage" id="message">
        <Form.Label className="mb-0">Message</Form.Label>
        <Form.Control
          as="textarea"
          type="textarea"
          rows={3}
          placeholder="Enter message"
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          isInvalid={!!errors.message}
          required
        />
        <Form.Control.Feedback type="invalid">
          {/* Please enter a message.*/}
          {errors.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        onClick={handleSubmit}
        variant="primary"
        type="submit"
        className="my-2"
        size="sm"
      >
        Submit
      </Button>
    </Form>
  );

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(event.target.formFullName.value);
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  //   let fullName = event.target.formFullName.value;
  //   let email = event.target.formEmail.value;
  //   let subject = event.target.formSubject.value;
  //   let message = event.target.formMessage.value;
  //   console.log(fullName + ", " + email + ", " + subject + ", " + message);
  //   // console.log(form);
  // };

  return (
    <FormContainer className="Contact">
      <h1>Contact us</h1>
      {/*<Form noValidate validated={validated} onSubmit={handleSubmit}>*/}
      {!submitted ? theForm : formSubmitted}
    </FormContainer>
  );
};

export default Contact;
