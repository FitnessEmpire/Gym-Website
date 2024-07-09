import React, { useState } from "react";
import styled from "styled-components";
import bg from "../assets/Gym_5.jpg";

export default function BecomeMember() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mkgwnlyn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phoneNumber }),
      });
      if (response.ok) {
        setMessage("Form submitted successfully");
      } else {
        setMessage("An error occurred while submitting the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred while submitting the form");
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Become a Member</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            Name:
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
          <Label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            Phone Number:
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
        <Message>{message}</Message>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: rgba(249, 249, 249, 0.9);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
`;
