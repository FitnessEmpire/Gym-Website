import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
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
        <Title>Enroll Today to Get Exclusive Offers</Title>
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const popInOut = keyframes`
  0%, 100% {
    transform: scale(1);
    text-shadow: 0 0 5px #fff, 0 0 10px #000, 0 0 15px #000, 0 0 20px #000;
  }
  50% {
    transform: scale(1.1);
    text-shadow: 0 0 10px #fff, 0 0 20px #000, 0 0 30px #000, 0 0 40px #000;
  }
`;

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
  background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(1, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
  animation: ${popInOut} 2s ease-in-out infinite;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  color: #fff; /* White color for labels */
  animation: ${fadeIn} 1s ease-in-out;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent input background */
  color: #000; /* Black text color */
  animation: ${fadeIn} 1s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  color: #fff; /* White color for message */
  animation: ${fadeIn} 1s ease-in-out;
`;
